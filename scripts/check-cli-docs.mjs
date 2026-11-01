#!/usr/bin/env node
/**
 * Checks that the command reference in this site matches the SASjs CLI it
 * documents. Run it before a release, or in CI on every pull request.
 *
 * Two kinds of check, both hard facts rather than judgement calls:
 *
 *   A  coverage - every command the CLI registers has a page in the nav, every
 *      entry in the nav's Commands section names a real command, and every page
 *      in docs/ appears in the nav.
 *   B1 direction - every `--flag` a command page mentions is declared by that
 *      command. This is the check that catches a renamed or removed option
 *      (a page promising `--datafile` when the CLI has `--data`), and a flag a
 *      page invented.
 *
 * It does NOT check the other direction - that every declared flag is
 * documented - because that one needs a per-page allowlist (inherited flags,
 * sub-command-only flags, deliberately undocumented ones) and the false
 * positives train people to ignore the check.
 *
 * The CLI is installed into a temp folder from npm, so the check runs against
 * what a user actually has, not against a checkout. Pin the version:
 *
 *   node scripts/check-cli-docs.mjs --cli-version 6.6.0
 *   CLI_DOCS_VERSION=latest node scripts/check-cli-docs.mjs
 */

import { execFileSync, spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, readdirSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const readArg = (name, fallback) => {
  const index = process.argv.indexOf(name)
  return index > -1 ? process.argv[index + 1] : fallback
}

const cliVersion = readArg('--cli-version', process.env.CLI_DOCS_VERSION || '6.6.0')
const docsDir = path.join(repoRoot, readArg('--docs', 'docs'))
const navFile = path.join(repoRoot, readArg('--nav', 'mkdocs.yml'))

// Flags handled before a command is dispatched, or answered by every command,
// so no command page may be taken to task for mentioning them.
const globalFlags = new Set(['version', 'help'])

const failures = []
const fail = (message) => failures.push(message)

/** Lower case, no hyphens or underscores - so `--passwordStdin` and
 * `--password-stdin` compare equal, while `--datafile` and `--data` do not. */
const normaliseFlag = (flag) =>
  flag.replace(/^--/, '').toLowerCase().replace(/[-_]/g, '')

const run = (command, args, options = {}) =>
  execFileSync(command, args, { encoding: 'utf8', stdio: 'pipe', ...options })

console.log(`Installing @sasjs/cli@${cliVersion} ...`)
const installDir = mkdtempSync(path.join(tmpdir(), 'cli-docs-check-'))
run('npm', [
  'install',
  '--prefix',
  installDir,
  '--no-audit',
  '--no-fund',
  '--silent',
  `@sasjs/cli@${cliVersion}`
])

const packageDir = path.join(installDir, 'node_modules', '@sasjs', 'cli')
const sasjsBin = path.join(installDir, 'node_modules', '.bin', 'sasjs')

const commands = run('node', [
  '-e',
  `console.log(JSON.stringify({
     commands: [...require('${path
       .join(packageDir, 'build/types/command/commandFactory')
       .replace(/\\/g, '/')}').getAllSupportedCommands()],
     aliases: [...require('${path
       .join(packageDir, 'build/types/command/commandAliases')
       .replace(/\\/g, '/')}').aliasMap.entries()]
   }))`
])
const { commands: commandList, aliases } = JSON.parse(commands)

const aliasToCommand = new Map()
for (const [command, aliasList] of aliases) {
  for (const alias of aliasList) aliasToCommand.set(alias, command)
}
const unalias = (name) => aliasToCommand.get(name) || name

/** Long option names from the help text's `Options:` block. A wrapped example
 * line can also begin with a flag, so only the options block is read. */
const parseOptions = (helpText) => {
  const flags = new Set()
  const lines = helpText.split('\n')
  const start = lines.findIndex((line) => line.trim() === 'Options:')
  if (start === -1) return flags

  for (const line of lines.slice(start + 1)) {
    if (line.trim() === '') break

    const match = line.match(
      /^\s{2,}(?:-[A-Za-z],\s+)?(--[A-Za-z][A-Za-z0-9-]*)(?:,\s+(--[A-Za-z][A-Za-z0-9-]*))?/
    )
    if (!match) continue

    flags.add(match[1])
    if (match[2]) flags.add(match[2])
  }

  return flags
}

const parseSubCommands = (helpText) => {
  const match = helpText.match(/subCommand\s+\[choices: ([^\]]+)\]/)
  if (!match) return []

  return (match[1].match(/"([^"]+)"/g) || []).map((quoted) =>
    quoted.replace(/"/g, '')
  )
}

/**
 * The sub commands each command accepts, read from the map in the installed
 * package - `fs` and `job` are not in it, so they are listed here.
 */
const subCommandsFromPackage = () => {
  const source = readFileSync(
    path.join(packageDir, 'build/types/command/commandBase.js'),
    'utf8'
  )
  const map = new Map()

  for (const entry of source.matchAll(/\['(\w+)', \[([^\]]*)\]\]/g)) {
    map.set(
      entry[1],
      entry[2]
        .split(',')
        .map((name) => name.trim().replace(/^'|'$/g, ''))
        .filter(Boolean)
    )
  }

  return map
}

// `fs` and `job` declare their sub commands in code rather than as yargs
// choices, so their help text does not list them.
const extraSubCommands = { fs: ['compile', 'sync', 'deploy'], job: ['execute'] }

const help = (args) => {
  // The CLI answers an unknown `--help` by printing the help text and exiting
  // non-zero, and it prints to stderr - so both streams are read and the exit
  // status is ignored.
  const result = spawnSync(sasjsBin, [...args, '--help'], { encoding: 'utf8' })

  return `${result.stdout || ''}${result.stderr || ''}`
}

console.log(`Reading the command surface of ${commandList.length} commands ...`)
const subCommandsInPackage = subCommandsFromPackage()
const declaredFlags = new Map()
for (const command of commandList) {
  const baseHelp = help([command])
  const flags = new Set([...parseOptions(baseHelp)].map(normaliseFlag))

  const subCommands = [
    ...new Set([
      ...parseSubCommands(baseHelp),
      ...(subCommandsInPackage.get(command) || []),
      ...(extraSubCommands[command] || [])
    ])
  ]

  for (const subCommand of subCommands) {
    for (const flag of parseOptions(help([command, subCommand]))) {
      flags.add(normaliseFlag(flag))
    }
  }

  declaredFlags.set(command, flags)
}

// ---------------------------------------------------------------- the pages

const mkdocs = readFileSync(navFile, 'utf8')
const navCommands = []
const navPages = []
let section = ''
for (const line of mkdocs.split('\n')) {
  const heading = line.match(/^ {2}- ([^:]+):\s*$/)
  if (heading) {
    section = heading[1].trim()
    continue
  }

  const entry = line.match(/^\s*- ([^:]+): (.+\.md)\s*$/)
  if (!entry) continue

  // A top-level page closes whatever section came before it.
  if (/^ {2}- /.test(line)) section = ''

  navPages.push(entry[2].trim())
  if (section === 'Commands') {
    navCommands.push({ label: entry[1].trim(), file: entry[2].trim() })
  }
}

const docFiles = readdirSync(docsDir).filter((file) => file.endsWith('.md'))

// A - coverage, in both directions.
const coveredCommands = new Set()
for (const { label, file } of navCommands) {
  const name = label.replace(/^sasjs\s+/, '').trim()
  const command = unalias(name)

  if (!commandList.includes(command)) {
    fail(
      `nav: "${label}" (${file}) is not a command the CLI registers. Known: ${commandList.join(', ')}`
    )
    continue
  }

  if (!docFiles.includes(file)) {
    fail(`nav: "${label}" points at ${file}, which does not exist`)
    continue
  }

  coveredCommands.add(command)
}

for (const command of commandList) {
  if (!coveredCommands.has(command)) {
    fail(`nav: no page for the "${command}" command`)
  }
}

for (const file of docFiles) {
  if (!navPages.includes(file)) {
    fail(`nav: docs/${file} is not in the nav, so it is unreachable`)
  }
}

// B1 - flags mentioned on a page must be declared by that command.
let flagsChecked = 0
const ignoredFlags = []
for (const { label, file } of navCommands) {
  const command = unalias(label.replace(/^sasjs\s+/, '').trim())
  const declared = declaredFlags.get(command)
  if (!declared) continue

  const markdown = readFileSync(path.join(docsDir, file), 'utf8')

  // A page may name a flag it does not own - another tool's flag quoted in an
  // example, or a flag it is explaining the absence of. Those are declared in
  // an HTML comment, which is stripped before the scan.
  const ignoredOnPage = new Set()
  for (const comment of markdown.matchAll(/<!--\s*cli-docs-ignore:\s*([^>]*?)-->/g)) {
    for (const flag of comment[1].match(/--[A-Za-z][A-Za-z0-9-]*/g) || []) {
      ignoredOnPage.add(normaliseFlag(flag))
    }
  }
  for (const flag of ignoredOnPage) ignoredFlags.push(`${file}: --${flag}`)

  const body = markdown.replace(/<!--[\s\S]*?-->/g, '')
  const mentioned = new Set(
    (body.match(/--[A-Za-z][A-Za-z0-9-]*/g) || [])
      .map(normaliseFlag)
      .filter((flag) => !globalFlags.has(flag) && !ignoredOnPage.has(flag))
  )

  for (const flag of mentioned) {
    flagsChecked++
    if (!declared.has(flag)) {
      fail(
        `${file}: mentions --${flag}, which "${command}" does not declare. It has: ${[
          ...declared
        ]
          .sort()
          .map((name) => `--${name}`)
          .join(', ')}`
      )
    }
  }
}

console.log(
  `Checked ${commandList.length} commands, ${navCommands.length} command pages, ${flagsChecked} flag mentions.`
)

if (ignoredFlags.length) {
  console.log(`Ignored on request (${ignoredFlags.length}): ${ignoredFlags.join(', ')}`)
}

if (failures.length) {
  console.error(`\n${failures.length} problem(s):`)
  for (const failure of failures) console.error(`  - ${failure}`)
  process.exit(1)
}

console.log('The command reference matches the CLI.')

This file is deliberately README.txt, not README.md, so it is not part of the
published docs.

The site at https://cli.sasjs.io is built and deployed by GitHub Actions when a
change reaches master. To contribute, edit the markdown in docs/ and add the page
to the nav in mkdocs.yml.

Building locally
----------------

    pip install -r requirements.txt
    ./build.sh

build.sh runs the same two steps as CI: it generates the sasjsconfig schema page
(docs/sasjsconfig.html, which docs/sasjsconfig.md frames) and then runs
`mkdocs build --strict`. The output lands in ./site, which is gitignored.

`mkdocs serve` is the live-reload variant, for writing rather than checking.

Checking the command reference
------------------------------

    node scripts/check-cli-docs.mjs --cli-version 6.4.7

This installs the named CLI from npm into a temporary folder and compares it with
the site: every command must have a page in the nav, every nav command page must
name a command the CLI registers, every page must be in the nav, and no page may
mention a `--flag` its command does not declare.

It runs on every pull request against the version pinned in
.github/workflows/build.yml, and weekly against @latest (docs-drift.yml), which is
how a CLI release that renames a flag shows up. Bumping the pin is part of
picking up a CLI release.

A page may legitimately name a flag it does not own - another tool's flag in an
example, or a flag it is explaining the absence of. Those are listed in an HTML
comment that the check reads and reports:

    <!-- cli-docs-ignore: --yes (npm init flag) -->

Look and feel
-------------

docs/stylesheets/extra.css holds the design tokens and the component tweaks;
mkdocs.yml holds the palette (light/dark with a toggle), the fonts (Inter,
JetBrains Mono) and the layout features. Both schemes are stated per scheme
attribute; Material sets that attribute on <html> and <body>, and its palette
rules have the same specificity, so anything that must hold carries the element
qualifier (html[...] / body[...]) and, for the header background, !important.

Writing style
-------------

The site is written for someone who is mid-task:

  - Present tense, second person. "Running the command applies the fixes", not
    "simply run the command and the fixes are applied!".
  - No exclamation marks, no marketing adjectives, no "we are excited".
  - Command names and flags in backticks, exactly as the CLI spells them.
  - Sentence case for headings; one idea per paragraph; tables for options.
  - Every claim about behaviour is worth a check against the published CLI. If
    the CLI is wrong, fix the CLI (or file it) rather than documenting around it.

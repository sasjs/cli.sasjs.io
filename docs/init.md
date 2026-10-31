---
layout: article
title: Adding SASjs to an existing project with sasjs init
description: The sasjs init command turns an existing folder into a SASjs project - it writes the sasjsconfig.json, the doxygen templates and the lint config, and installs @sasjs/core.
---

# sasjs init

The `sasjs init` command turns a folder that already contains code into a SASjs project. Change into that folder and run:

```
sasjs init
```

It takes no arguments and works on the current working directory. Use [`sasjs create`](/create) when you want a new project scaffolded from a template; use `sasjs init` when the SAS programs, jobs or other files are already in place and you want the SASjs tooling to work over them.

## Prerequisites

- The SASjs CLI [installed](/installation) (`sasjs init` works without a deployment target - it does not contact a SAS server)
- Network access, for the `@sasjs/core` install

## What it creates

| Path | Purpose |
| --- | --- |
| `sasjs/sasjsconfig.json` | Project configuration, including a placeholder target |
| `sasjs/macros/` | The macro folder `macroFolders` points at - created with a `.gitkeep` so an empty folder survives a commit |
| `sasjs/doxy/` | Doxygen templates used by [`sasjs doc`](/doc) |
| `.sasjslint` | Lint rules used by [`sasjs lint`](/lint) - created only if absent |
| `.gitignore` | Adds `node_modules`, `sasjsbuild`, `sasjsresults` and `.env*` if those rules are missing; existing content is kept |
| `package.json` | Created with `npm init --yes` if the folder has none, then `@sasjs/core` is added as a dependency |

`node_modules` and `package-lock.json` follow from that install.

It does **not** create `sasjs/services`, `sasjs/jobs` or the rest of the layout, and it does not add a README - [`sasjs create`](/create) is the command that lays out a full project.

## The generated sasjsconfig.json

```json
{
  "$schema": "https://cli.sasjs.io/sasjsconfig-schema.json",
  "macroFolders": ["sasjs/macros"],
  "defaultTarget": "mytarget",
  "targets": [
    {
      "name": "mytarget",
      "serverType": "SASJS",
      "serverUrl": "",
      "appLoc": "/Public/apps/myapp"
    }
  ]
}
```

The single target is a placeholder. `serverUrl` is empty rather than a sample URL, because an empty value reads as "not configured yet" while a non-empty placeholder has to pass URL validation every time the configuration is read. Put the real `serverUrl` and `appLoc` in it, or add a target with [`sasjs add`](/add) / by editing the file - see [the configuration reference](/sasjsconfig).

## Running it in a folder that is already a SASjs project

If the folder already contains `sasjs/sasjsconfig.json`, `sasjs init` aborts without touching anything:

```
$ sasjs init
ERROR  This folder is already a SASjs project (sasjs/sasjsconfig.json exists). Aborting without making changes.
$ echo $?
4
```

Exit code `4` is the only code that means the folder is already a SASjs project, so a script can branch on it. Code `1` covers an invalid command or invalid arguments, and code `2` a genuine failure.

The check looks at the current folder only. Initialising inside a folder that belongs to a project higher up starts a new project in that folder, which is what a repository holding several separate SASjs apps needs.

The refusal is deliberate. A target carries user data - `serverUrl`, `appLoc`, `authInfo`, `contextName` - and an unconditional write would replace it with the placeholder above. `sasjs create` writes a `sasjsconfig.json` of its own, so `sasjs init` is not needed after `sasjs create`, and running it there aborts too.

To re-run the initialisation, delete or move `sasjs/sasjsconfig.json` first.

## After initialisation

A freshly initialised project compiles straight away: the macro folder exists and the empty `serverUrl` passes validation, so no edit is needed before the first build step. Running `sasjs compile` in the folder compiles the project for the `mytarget` target.

Commands that talk to a SAS server - [`sasjs deploy`](/deploy), [`sasjs run`](/run), [`sasjs request`](/request) and the authentication commands - need a real `serverUrl` first.

The other local commands work in the folder as they are:

```
sasjs build
sasjs doc
sasjs lint
```

The configuration, the build and deploy settings, and the target attributes are described in [the sasjsconfig reference](/sasjsconfig), and the full command list is on the [home page](/).

<!-- cli-docs-ignore: --yes (npm init flag) -->

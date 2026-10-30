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
| `sasjs/doxy/` | Doxygen templates used by [`sasjs doc`](/doc) |
| `.sasjslint` | Lint rules used by [`sasjs lint`](/lint) - created only if absent |
| `.gitignore` | Adds `node_modules`, `sasjsbuild`, `sasjsresults` and `.env*` if those rules are missing; existing content is kept |
| `package.json` | Created with `npm init --yes` if the folder has none, then `@sasjs/core` is added as a dependency |

`node_modules` and `package-lock.json` follow from that install.

Two things it does **not** do:

- it does not create `sasjs/macros`, the `sasjs/services` or `sasjs/jobs` folders, or any other part of the project layout - `macroFolders` simply points at `sasjs/macros`, so create that folder before you run [`sasjs compile`](/compile)
- it does not add a README - that comes from [`sasjs create`](/create)

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
      "serverUrl": " ",
      "appLoc": "/Public/apps/myapp"
    }
  ]
}
```

The single target is a placeholder. Put the real `serverUrl` and `appLoc` in it, or add a target with [`sasjs add`](/add) / by editing the file - see [the configuration reference](/sasjsconfig).

## Running it in a folder that is already a SASjs project

If `sasjs/sasjsconfig.json` already exists, `sasjs init` aborts without touching anything:

```
$ sasjs init
ERROR  This folder is already a SASjs project (sasjs/sasjsconfig.json exists). Aborting without making changes.
$ echo $?
1
```

Exit code `1` means the folder is already a SASjs project, which a script can test for; exit code `2` means the initialisation itself failed.

The refusal is deliberate. A target carries user data - `serverUrl`, `appLoc`, `authInfo`, `contextName` - and an unconditional write would replace it with the placeholder above. `sasjs create` writes a `sasjsconfig.json` of its own, so `sasjs init` is not needed after `sasjs create`, and running it there aborts too.

To re-run the initialisation, delete or move `sasjs/sasjsconfig.json` first.

## After initialisation

Every other SASjs command works in the folder, for example:

```
sasjs compile
sasjs build
sasjs doc
sasjs lint
```

The configuration, the build and deploy settings, and the target attributes are described in [the sasjsconfig reference](/sasjsconfig), and the full command list is on the [home page](/).

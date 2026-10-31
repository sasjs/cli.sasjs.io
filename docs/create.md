---
layout: article
title: Creating SAS projects with sasjs create
description: The sasjs create command scaffolds a SASjs project - the plain folder structure or a template app - complete with sasjsconfig.json, doxygen templates and lint config.
---

# sasjs create

`sasjs create` scaffolds a SASjs project: the folder structure, a `sasjs/sasjsconfig.json` to go with it, the doxygen templates, the lint config, a README and a `.gitignore`.

## Syntax

```
sasjs create [folder-name] [options]
```

| Option | Alias | Description |
| --- | --- | --- |
| `--template` | `-t` | The template to scaffold from. One of `react`, `angular`, `minimal`, `sasonly` or `jobs`. Omitted, the command writes the plain folder structure instead. |

!!! warning
    `-t` is the **template** here, not the target used by most other commands. There is no target option on `sasjs create` - a new project needs no connection to a SAS server.

Examples:

```bash
# a plain SASjs project
sasjs create my-sas-project

# a React app, with the SASjs backend and the adapter wired up
sasjs create my-web-app --template react
sasjs create my-web-app -t react
```

## The plain project

With no `--template`, `sasjs create` writes the structure below, and then runs `npm init` and adds `@sasjs/core` as a dependency.

```
my-sas-project/
└── sasjs/
    ├── sasjsconfig.json     <- three targets: viya, sas9 and sasjs
    ├── build/               <- init/term programs, and the deploy scripts
    ├── db/                  <- one folder per database, with example DDL and load programs
    ├── macros/              <- your SAS macros
    ├── programs/            <- SAS programs included by services
    ├── services/            <- SASjs web services (common/ and admin/)
    └── targets/             <- per-target macros, services and programs
        ├── sas9/
        └── viya/
```

The generated `sasjsconfig.json` configures `serviceFolders`, `macroFolders` and `buildConfig` against those folders, and carries the three placeholder targets, so the project can be compiled and built without editing anything. Put the real server details into a target with [`sasjs add`](add.md) before you deploy.

## Templates

| Template | Source | What you get |
| --- | --- | --- |
| `react` | [sasjs/react-seed-app](https://github.com/sasjs/react-seed-app) | A React app, with the [SASjs Adapter](https://adapter.sasjs.io) configured and a SASjs backend |
| `angular` | [sasjs/angular-seed-app](https://github.com/sasjs/angular-seed-app) | The same, in Angular |
| `minimal` | [sasjs/minimal-seed-app](https://github.com/sasjs/minimal-seed-app) | A small app in plain JavaScript |
| `jobs` | [sasjs/template_jobs](https://github.com/sasjs/template_jobs) | Backend only: SAS jobs, with a flow example |
| `sasonly` | [sasjs/template_sasonly](https://github.com/sasjs/template_sasonly) | Backend only: SAS web services, no frontend |

## Running it in an existing folder

Run `sasjs create` with no folder name and the project is written into the current directory - the folder structure is created there, and `package.json` gains the `@sasjs/core` dependency if the folder already holds one.

If the folder already contains SAS code that you want to keep, use [`sasjs init`](init.md) instead: it adds the SASjs tooling without writing a folder structure over what is there.

<script id="asciicast-2HEe1ym63B8BNAvISepe1vmT5" src="https://asciinema.org/a/2HEe1ym63B8BNAvISepe1vmT5.js" async></script>

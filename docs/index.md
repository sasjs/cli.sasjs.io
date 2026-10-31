---
layout: article
title: SASjs CLI Documentation
description: The SASjs CLI compiles, builds, tests, documents and deploys SAS projects to Viya, SAS 9 EBI and SASjs Server.
---

# SASjs CLI

The SASjs Command Line Interface is a swiss-army knife for Dev Ops on SAS Viya, SAS 9 EBI and [SASjs Server](https://server.sasjs.io).

What it does:

- **Create** - scaffold a project from a template, or add the SASjs tooling to code that already exists
- **Compile** - inline every dependency of each job, service and test, with the configured macro variables, init and term programs
- **Build** - collate the compiled artefacts into a single deployable build pack (`.json`, `.json.zip` and `.sas`)
- **Deploy** - create the folders, jobs, services and tests on the SAS server
- **Test** - run SAS unit tests, and collect results, logs and coverage
- **Document** - generate a Doxygen site from the headers in your macros and programs
- **Lint** - find and fix problems in SAS code with [@sasjs/lint](https://github.com/sasjs/lint)

There is also [streaming](https://sasapps.io/sas-streamed-apps) support, which lets you deploy a frontend as SAS services and skip the SAS Web Server.

## Install

```bash
npm i -g @sasjs/cli
```

Node is required first - see [installation](installation.md).

## Where to start

| If you want to | run |
| --- | --- |
| Start a new project from a template | [`sasjs create`](create.md) |
| Add SASjs to a folder that already holds SAS code | [`sasjs init`](init.md) |
| Connect the project to a SAS server | [`sasjs add`](add.md) |
| Compile, build and deploy in one step | [`sasjs cbd`](cbd.md) |

## Commands

Every command also has a page in this site; the same list is printed by [`sasjs help`](help.md).

| Command | Alias | What it does |
| --- | --- | --- |
| [`sasjs add`](add.md) | | Prompts for the connection details of a SAS target and saves them; `sasjs add cred` adds credentials to an existing target |
| [`sasjs auth`](auth.md) | | Obtains an access token for a target - client/secret (`sasjs auth`), or SAS username and password (`sasjs auth login`) |
| [`sasjs build`](build.md) | `b` | Collates the compiled jobs, services and tests into a deployable build pack |
| [`sasjs cb`](cb.md) | | Runs [`compile`](compile.md) and then [`build`](build.md) |
| [`sasjs cbd`](cbd.md) | | Runs [`compile`](compile.md), [`build`](build.md) and then [`deploy`](deploy.md) |
| [`sasjs compile`](compile.md) | `c` | Inlines all dependencies into a self-contained program per job, service and test |
| [`sasjs context`](context.md) | | Lists, exports, creates, edits and deletes SAS Viya compute contexts |
| [`sasjs create`](create.md) | | Scaffolds a SASjs project from a template |
| [`sasjs db`](db.md) | | Concatenates the `.ddl` and `.sas` files under `sasjs/db` into one file per database |
| [`sasjs deploy`](deploy.md) | `d` | Deploys the built artefact to the target's SAS environment |
| [`sasjs doc`](doc.md) | `docs` | Generates the Doxygen documentation site, or the data lineage |
| [`sasjs flow`](flow.md) | | Executes a flow (a JSON list of jobs) in order, logging the results to CSV |
| [`sasjs folder`](folder.md) | | Creates, deletes, lists and moves SAS Viya folders |
| [`sasjs fs`](fs.md) | | Synchronises files with a remote SAS directory (`compile`, `sync`, `deploy`) |
| [`sasjs help`](help.md) | `h` | Prints the available commands |
| [`sasjs init`](init.md) | | Adds SASjs to an existing project - config, doxygen templates, lint config and `@sasjs/core` |
| [`sasjs job`](job.md) | | Executes a SAS job on the target, with options for waiting, logging and streaming |
| [`sasjs lint`](lint.md) | | Lints your SAS code and reports problems, or fixes them |
| [`sasjs request`](request.md) | `rq` | Calls a SASjs web service from the commandline |
| [`sasjs run`](run.md) | `r` | Runs an arbitrary SAS file (local path or URL) on the target |
| [`sasjs servicepack`](servicepack.md) | | Deploys a service pack - a JSON collection of folders and services |
| [`sasjs snippets`](snippets.md) | | Generates a VS Code snippets file from the macro Doxygen headers |
| [`sasjs test`](test.md) | | Runs SAS unit tests and collects results, logs and coverage |
| [`sasjs version`](version.md) | `v` | Prints the installed version of the CLI |
| [`sasjs web`](web.md) | `w` | Builds the streaming web app services from the target's `webSourcePath` |

## Concepts

| Page | Covers |
| --- | --- |
| [Artefacts](artefacts.md) | Jobs, services and tests - what each file type is, and how it is compiled |
| [SASjs Config File](sasjsconfig.md) | The `sasjs/sasjsconfig.json` settings, at root and target level |
| [ENV File](env.md) | `.env` and `.env.<target>` variables such as `ACCESS_TOKEN` and `VERBOSE` |
| [SASjs Runner](runner.md) | The SAS 9 runner, which SAS 9 deployments need in metadata |
| [FAQ](faq.md) | Common questions and error messages |

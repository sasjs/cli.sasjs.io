---
layout: article
title: SASjs CLI
description: Build, test, document and deploy SAS projects to Viya, SAS 9 EBI and SASjs Server, from the command line.
---

<div class="sasjs-hero" markdown>

# Build SAS like you build everything else

One command line tool for the whole lifecycle of a SAS project: scaffold it, compile every
dependency into each service, build a deployable artefact, deploy it to Viya, SAS 9 or SASjs
Server, and test and document what you shipped.

```bash
npm i -g @sasjs/cli
```

</div>

<div class="grid cards" markdown>

-   :material-rocket-launch-outline:{ .lg .middle } **Start a project**

    ---

    Scaffold from a template, or add the SASjs tooling to code that already exists.

    [:octicons-arrow-right-24: `sasjs create`](create.md) - [:octicons-arrow-right-24: `sasjs init`](init.md)

-   :material-lan-connect:{ .lg .middle } **Connect a target**

    ---

    Point the CLI at a SAS environment once, locally or in your home directory, and every command
    can use it.

    [:octicons-arrow-right-24: `sasjs add`](add.md) - [:octicons-arrow-right-24: `sasjs auth`](auth.md)

-   :material-package-variant-closed:{ .lg .middle } **Ship it**

    ---

    Compile, build and deploy in one step. The artefact is portable between Viya, SAS 9 and SASjs
    Server.

    [:octicons-arrow-right-24: `sasjs cbd`](cbd.md) - [:octicons-arrow-right-24: how artefacts work](artefacts.md)

-   :material-test-tube:{ .lg .middle } **Test and document**

    ---

    Run SAS unit tests with coverage, and generate a Doxygen site with data lineage from the same
    headers.

    [:octicons-arrow-right-24: `sasjs test`](test.md) - [:octicons-arrow-right-24: `sasjs doc`](doc.md)

</div>

## Commands

Every command has a page, and the same list is printed by [`sasjs help`](help.md).

| Command | Alias | What it does |
| --- | --- | --- |
| [`sasjs add`](add.md) | | Prompts for the connection details of a SAS target and saves them; `sasjs add cred` adds credentials to an existing target |
| [`sasjs auth`](auth.md) | | Obtains an access token for a target - client/secret (`sasjs auth`), or SAS username and password (`sasjs auth login`) |
| [`sasjs bd`](bd.md) | | Runs [`build`](build.md) and then [`deploy`](deploy.md), without recompiling first |
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

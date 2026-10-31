---
layout: article
title: Compile and build in one step with sasjs cb
description: The sasjs cb command runs sasjs compile and then sasjs build, producing the deployable artefact in a single step.
---

# sasjs cb

`sasjs cb` runs [`sasjs compile`](compile.md), and then [`sasjs build`](build.md). It is the shortcut for the two steps that produce a deployable artefact, without the deployment that [`sasjs cbd`](cbd.md) adds.

## Syntax

```
sasjs cb [options]
```

`sasjs compilebuild` is the long form of the same command.

| Option | Alias | Description |
| --- | --- | --- |
| `--target` | `-t` | The target whose configuration drives the compile and the build. Defaults to the `defaultTarget` in `sasjsconfig.json`. |

Examples:

```bash
sasjs cb -t myTarget
sasjs compilebuild -t myTarget
```

## What it runs

| Step | Command | Output |
| --- | --- | --- |
| 1 | `sasjs compile` | `sasjsbuild/jobs`, `sasjsbuild/services`, `sasjsbuild/tests` |
| 2 | `sasjs build` | `sasjsbuild/<target>.json`, `.json.zip` and `.sas` |

A compile that fails stops the run - the build is not attempted, and the command exits with an error. When both succeed, the compile and build output is in the `sasjsbuild` folder, ready for [`sasjs deploy`](deploy.md).

## When to use the two commands separately

`sasjs cb` leaves no opportunity to change the compiled output between the two steps. If you want to adjust what gets built - removing tests for a production deploy, for instance - run the commands yourself:

```bash
sasjs compile -t myTarget
rm -rf sasjsbuild/tests
sasjs build -t myTarget
```

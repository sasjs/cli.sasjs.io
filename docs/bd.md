---
layout: article
title: sasjs bd
description: Build and deploy a SASjs project in one step, shipping the compiled services already on disk instead of recompiling everything.
---

# sasjs bd

`sasjs bd` is two commands in one:

1. [`sasjs build`](build.md) - collates the compiled services into a deployable build pack
2. [`sasjs deploy`](deploy.md) - deploys that pack to the target

`builddeploy` is the long form of the same command.

## When to use it, and when not to

The difference from [`sasjs cbd`](cbd.md) is the compile step.

| | what it runs |
| --- | --- |
| `sasjs cbd` | `compile` -> `build` -> `deploy` - always recompiles every service from source |
| `sasjs bd` | `build` -> `deploy` - ships the compiled services already in the build folder |

So `bd` is the tight loop: change one service, compile that service, ship it. `cbd` is the safe loop: rebuild everything from source, then ship. If you have any doubt that the build folder matches your source, use `cbd`.

`build` does not compile: with no build folder, `sasjs bd` fails with `Run 'sasjs compile' (or 'sasjs cbd') first`. Run [`sasjs compile`](compile.md) once in a fresh checkout, or use [`sasjs cbd`](cbd.md) if you want the compile every time.

## Syntax

```
sasjs bd [options]
```

| Option | Alias | Description |
| --- | --- | --- |
| `--target` | `-t` | The target whose configuration drives both steps. Defaults to the `defaultTarget` in `sasjsconfig.json`. |

## Examples

```bash
# build and deploy to the default target
sasjs bd

# build and deploy to a named target
sasjs bd -t myViyaTarget

# compile one service, then ship it
sasjs compile service --source sasjs/services/common/load.sas -t myViyaTarget
sasjs bd -t myViyaTarget
```

## Exit codes

| Code | Meaning |
| --- | --- |
| `0` | Built and deployed |
| `1` | The build failed - `deploy` does not run, and the build error is the one printed |
| `1` | The build succeeded and the deploy failed - the deploy error is the one printed |

A failed build never deploys a partial pack.

<!-- cli-docs-ignore: --source (sasjs compile flag in the worked example) -->

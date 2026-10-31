---
layout: article
title: Checking the CLI version with sasjs version
description: The sasjs version command prints the version of the SASjs CLI that is running - as sasjs version, sasjs v, sasjs -v or sasjs --version.
---

# sasjs version

`sasjs version` prints the version of the SASjs CLI you are running.

## Syntax

```
sasjs version
sasjs v
sasjs -v
sasjs --version
```

All four are the same command. It takes no arguments and needs no target or project.

Example:

```
$ sasjs --version
You are using SASjs CLI v6.4.7
```

## Notes

- The version is read from the package that is running, so it is right whichever way the CLI was installed - globally, into a project, through `npx`, or from a temporary prefix.
- A CLI running from a source checkout (`npm link`, or a local build) reports itself as a linked version, with the path it runs from. A source checkout carries no version of its own until it is packaged, so no version number is shown.
- `-v` and `--version` are accepted from **6.4.7**. Earlier releases reject them, and report a version only when the CLI is installed globally.

To see the commands available in the installed version, use [`sasjs help`](help.md).

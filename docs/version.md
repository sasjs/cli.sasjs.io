---
layout: article
title: Checking the CLI version with sasjs version
description: The sasjs version command prints the version of the SASjs CLI that is installed.
---

# sasjs version

`sasjs version` prints the version of the SASjs CLI you are running.

## Syntax

```
sasjs version
```

`sasjs v` is the alias. The command takes no arguments and needs no target or project.

Example:

```
$ sasjs version
You are using SASjs CLI v6.4.5
```

## Notes

- The version reported is the one resolved from a **global** install (`npm list -g @sasjs/cli`), so a CLI installed into a project folder, or run through `npx`, cannot report its version and the command fails. Use a global install (`npm i -g @sasjs/cli`) if you need this command.
- A CLI linked from source (`npm link`) is reported as a linked version, with the path it was linked from.
- `sasjs --version` is not a flag - use `sasjs version` or `sasjs v`.

To see the commands available in the installed version, use [`sasjs help`](help.md).

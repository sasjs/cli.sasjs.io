---
layout: article
title: Listing the commands with sasjs help
description: The sasjs help command prints the commands available in the installed version of the SASjs CLI.
---

# sasjs help

`sasjs help` prints the commands available in the installed version of the CLI, with a summary of what each one does.

## Syntax

```
sasjs help
```

`sasjs h` is the alias.

The text is built into the CLI, so it describes the version you are running rather than the newest one on this site. When a command in the list does not behave as you expect, check [`sasjs version`](version.md) first - an older CLI is the usual reason.

Every command also has a page here: see the [command table](index.md#commands).

## Help for a single command

Each command accepts `--help`, which prints its syntax, options and examples:

```bash
sasjs job --help
sasjs compile --help
```

A command name that the CLI does not recognise answers:

```
ERROR  Invalid SASjs command! Run sasjs help for a full list of available commands.
```

---
layout: article
title: ENV File
description: ENV File configuration options such as ACCESS_TOKEN and VERBOSE are documented here
---

# env file

When running the CLI a number of _environment_ variables are required - for authentication, debugging etc.

These variables can be actual environment variables (set as part of the shell invocation) or, loaded on startup from a `.env` file in the root of the SASjs project.

As different targets often have different variables (eg connection strings) a `.env` may be "scoped" with the target name, eg `.env.TARGETNAME`.

If a `.env.TARGETNAME` file is not found, then the generic `.env` file is used.

The following options may be defined, depending on your use case:

## ACCESS_TOKEN

Typically created when running `sasjs auth`.  Used for authentication to the Viya and SASjs APIs.

## REFRESH_TOKEN

Created when running `sasjs auth` against a Viya target.  The CLI will use this to auto-refresh the access token if needed.

## VERBOSE

Verbose mode will log a summary of every HTTP request/response to the console - this is helpful in troubleshooting edge cases and unusual server responses.

`VERBOSE=ON` (case insensitive) will enable the debug mode. Everything else (eg `VERBOSE=OFF`) will disable it.  The option is disabled by default.

!!! note
    Verbose mode can also be enabled for a single `sasjs job execute` command by adding the `--verbose`(`-v`) flag.

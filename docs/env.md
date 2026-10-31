---
layout: article
title: ENV File
description: The .env and .env.<target> files - the variables the SASjs CLI reads for authentication, logging and macro resolution.
---

# ENV file

Some values the CLI needs are environment variables rather than configuration: credentials, the access token, and a few switches that are useful when something misbehaves.

## Where the values come from

A `.env` file in the project root is loaded every time the CLI starts. When a command resolves a target, `.env.<target>` is loaded as well, so each target can carry its own credentials.

```
my-project/
├── .env           <- shared values
├── .env.viya      <- values for the `viya` target
└── .env.sas9      <- values for the `sas9` target
```

Both files are looked for in the current directory, and then in the directory above it. A variable that is already set in the shell wins over the file, so `ACCESS_TOKEN=xxx sasjs deploy` overrides whatever `.env` holds.

Neither file belongs in git. [`sasjs create`](create.md) and [`sasjs init`](init.md) add `.env*` to the project's `.gitignore`.

## Variables

| Variable | Written by | Read for |
| --- | --- | --- |
| `ACCESS_TOKEN` | `sasjs add cred`, `sasjs auth login` | authenticating against Viya and SASjs Server |
| `REFRESH_TOKEN` | `sasjs add cred`, `sasjs auth login` | refreshing the access token when it expires |
| `CLIENT`, `SECRET` | `sasjs add cred` | the client/secret used to obtain a Viya token |
| `SAS_USERNAME`, `SAS_PASSWORD` | `sasjs add cred` (SAS 9) | SAS 9 authentication, and the username/password flow of [`sasjs auth login`](auth.md) |
| `SASJS_CLIENT` | you | the client id used when signing in to SASjs Server as a non-administrator |
| `LOG_LEVEL` | you | how much the CLI logs - `Info` by default |
| `VERBOSE` | you | request and response logging, see below |
| `macroCorePath` | you | where to find `@sasjs/core`, overriding the usual search - see [artefacts](artefacts.md) |

`sasjs auth login` also reads `SAS_USERNAME` and `SAS_PASSWORD` so it can run without prompts in CI, and accepts `--password-stdin` for the password alone.

## Logging

`VERBOSE=ON` (case insensitive) logs a summary of every HTTP request and response, which is what to reach for when a server answers something unexpected. `VERBOSE=BLEACHED` does the same without the colour codes, for a log you will read later. Anything else, including `VERBOSE=OFF`, leaves it off.

Setting `LOG_LEVEL=Trace` in the same file has the same effect as `VERBOSE=ON`.

!!! note
    Verbose mode can also be turned on for a single command with `--verbose` (`-v`) - for example `sasjs job execute -v`, or `sasjs job execute -v bleached` for the uncoloured version.

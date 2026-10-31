---
layout: article
title: Building streaming web app services with sasjs web
description: The sasjs web command turns the frontend in webSourcePath into SAS services - the streaming app - for Viya, SAS 9 or SASjs Server.
---

# sasjs web

`sasjs web` builds the streaming web app services - the frontend, packaged so that it can be served from the SAS folder tree instead of the SAS Web Server.

It does the web part of [compilation](compile.md) on its own: the same work `sasjs compile` does when `streamConfig.streamWeb` is `true`, without compiling the jobs and services.

## Syntax

```
sasjs web [options]
```

`sasjs w` is the alias.

| Option | Alias | Description |
| --- | --- | --- |
| `--target` | `-t` | The target whose `streamConfig` drives the build. Defaults to the `defaultTarget` in `sasjsconfig.json`. |

Example:

```bash
sasjs web -t myTarget
```

## What it needs

The project, or the target, must configure `streamConfig` - the target's values win where both set a key:

```json
"streamConfig": {
  "streamWeb": true,
  "webSourcePath": "../client/dist",
  "streamWebFolder": "webv",
  "streamServiceName": "clickme"
}
```

- `webSourcePath` must be a folder that exists, relative to the project root, and it must contain an `index.html`
- `streamWebFolder` is the folder below the target's `appLoc` that receives the services
- `streamServiceName` names the service that serves `index.html` - `clickme` by default

`webSourcePath` and `streamWebFolder` are both required, and the folder and its `index.html` are checked: the command stops with a message naming whichever is missing.

## What it produces

| Server type | Output |
| --- | --- |
| SAS Viya | A service per linked asset, plus the `clickme` service for `index.html`, written below `sasjsbuild/services/<streamWebFolder>` |
| SAS 9 | The same services, created for the SAS 9 web service model |
| SASjs Server | The contents of `webSourcePath`, copied to the same folder - SASjs Server serves the files directly, so no services are generated |

Tags in `index.html` are rewritten to point at the generated services, replacing the references to the original asset files.

The services land in the build folder, so they are deployed by the next [`sasjs build`](build.md) and [`sasjs deploy`](deploy.md) - or by [`sasjs cbd`](cbd.md).

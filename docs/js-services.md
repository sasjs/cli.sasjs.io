---
layout: article
title: JavaScript services and other non-SAS files
description: A service or job folder can hold files that are not SAS - JavaScript stored programs, web assets, data a deployment script reads. `sasjs compile` ships them unchanged.
---

# JavaScript services and other non-SAS files

A service folder is not restricted to `.sas` files. A file that is not a SAS program is carried into the build folder exactly as written, travels in the build pack under its own name with its own extension, and is stored on the server as a file member. Whether anything can run it is the server's decision, made from the extension.

This is what makes a JavaScript backend possible: `@sasjs/server` runs a stored program according to the code file's extension, so `services/editors/getdata.js` is a service in exactly the same sense as `getdata.sas`.

## Layout

Non-SAS files are configured with the same keys as SAS services - there is nothing extra to declare:

```json
{
  "serviceConfig": {
    "serviceFolders": ["sasjs/services"]
  },
  "targets": [
    {
      "name": "mock",
      "serverType": "SASJS",
      "appLoc": "/Public/app/mydata",
      "serviceConfig": {
        "serviceFolders": ["sasjs/services"]
      }
    }
  ]
}
```

A file at `sasjs/services/editors/getdata.js` compiles to `sasjsbuild/services/editors/getdata.js`, and deploys to `<appLoc>/services/editors/getdata.js`. Sub folders keep their shape, exactly as they do for `.sas` services.

Job folders behave the same way.

## What compile does with them

Nothing. The file is copied into the build folder byte for byte - no macro inlining, no `initProgram`, no header rewriting - and `sasjs compile` reports the counts so the mix is visible:

```
Compiled 2 SAS files; 9 files copied through unchanged (not SAS programs).
```

A service folder that holds no SAS at all is a legitimate shape:

```
Compiled 0 SAS files; 12 files copied through unchanged (not SAS programs).
```

`build` then reports what it packed:

```
Packing 0 SAS services and 12 files.
```

## What deploy does with them

The build pack carries the file as a member with its own name, so the server receives `getdata.js` and not `getdata.js.sas`. What happens next depends on the target:

| target | what happens |
| --- | --- |
| SASjs Server | written to the drive as a file member; the server picks a runtime from the extension |
| Viya | written to the app location as a file member; nothing executes it |
| SAS 9 | base64-encoded into the generated deployment program, which recreates it as a file on the server; nothing executes it |

A JavaScript service only runs where the server has a JavaScript runtime - `@sasjs/server` started with `RUN_TIMES=js`, for example. On Viya and SAS 9 the file is transported intact and sits inert, which matters when a service reads it as data.

## When the file changes

Compile keeps a manifest of the content it read at `sasjsbuild/.compile-manifest.json`, so a file that changes is recompiled and a project where nothing changed is skipped. Non-SAS files are part of that manifest, so editing `getdata.js` and running `sasjs compile` again rebuilds the project.

See [sasjs compile](compile.md#compiling-only-what-changed) for what the manifest covers.

## Deploying a JavaScript-only backend

A SASjs Server target with no SAS services deploys through the normal path - the build pack is a tree of members posted to the server's drive API, and nothing in it executes SAS:

```bash
sasjs cbd -t mock
```

```
Compiled 0 SAS files; 12 files copied through unchanged (not SAS programs).
Packing 0 SAS services and 12 files.
Deploying service pack to http://localhost:5000 at location /Public/app/mydata
Services have been successfully deployed
```

With `streamWeb` enabled the web assets are deployed and the app stream is registered in `appStreamConfig.json` in the same run.

The phrase "service pack" is the name of the artefact, not a requirement for SAS: it is the `sasjsbuild/<target>.json` (and `.zip`) that every target deploys from.

---
layout: article
title: SASjs Configuration
description: How to structure the sasjs/sasjsconfig.json file - the project and target settings that drive compile, build, deploy, test and doc.
og_image: https://cli.sasjs.io/img/targetBehaviour.svg
---

# SASjs Configuration

The config file says what a project contains - where its jobs, services, macros and programs are - and where they deploy. Every command starts here.

## Where the file lives

| File | Scope | Used when |
| --- | --- | --- |
| `sasjs/sasjsconfig.json` | Project | Any command run inside the project. The CLI walks up from the current folder and uses the nearest folder that holds a `sasjs/sasjsconfig.json`. |
| `~/.sasjsrc` | User | `sasjs add` with the global scope, and any command run outside a project. |

A named target is looked up in the project file first and then in `.sasjsrc`, so a project can keep its own targets while the user file holds the rest. Where both files carry a target with the same name, the project one wins. Where no target is named, `defaultTarget` decides.

![sasjs config target behaviour](/img/targetBehaviour.svg)

## Root level and target level

A setting belongs either at the root of the file, where it applies to every target, or inside a target, where it applies to that one. Three rules cover every key:

- a scalar setting inside a target replaces the root-level value
- folder arrays are combined - root folders first, then target folders, with duplicates removed - so a target adds folders rather than replacing them
- a macro, program or binary file found in an earlier folder is the one used

## What the file holds

| Key | Level | Contents |
| --- | --- | --- |
| `defaultTarget` | root | the target used when a command runs without `--target` |
| `targets` | root | the targets themselves, described below |
| `macroFolders` | root and target | folders searched for SAS macros |
| `programFolders` | root and target | folders searched for SAS Includes |
| `binaryFolders` | root and target | folders searched for files embedded as base64 |
| `serviceConfig` | root and target | `serviceFolders`, `initProgram`, `termProgram`, `macroVars` for services |
| `jobConfig` | root and target | the same for jobs, with `jobFolders` |
| `testConfig` | root and target | `initProgram`, `termProgram`, `macroVars`, `testSetUp` and `testTearDown` |
| `buildConfig` | root and target | `initProgram`, `termProgram`, `buildOutputFileName`, `macroVars` for [`sasjs build`](build.md) |
| `deployConfig` | root and target | `deployScripts` and `deployServicePack` for [`sasjs deploy`](deploy.md) |
| `docConfig` | root and target | `outDirectory`, `enableLineage`, `doxyContent`, `displayMacroCore`, `dataControllerUrl` for [`sasjs doc`](doc.md) |
| `streamConfig` | root and target | the streaming app: `webSourcePath`, `streamWebFolder`, `streamServiceName`, `streamWeb`, `streamLogo`, `assetPaths`, and `mockWeb` / `mockWebFolder` - see [`sasjs web`](web.md) |
| `syncFolder` | root and target | a folder copied as it is into the build output |
| `syncDirectories` | root and target | local/remote pairs for [`sasjs fs sync`](fs.md) |
| `sasjsBuildFolder`, `sasjsResultsFolder` | root and target | where the build and the results go - `sasjsbuild` and `sasjsresults` by default |
| `httpsAgentOptions` | root and target | TLS settings for the requests the CLI makes, such as `caPath` for an intermediate certificate |

## A target

| Key | Meaning |
| --- | --- |
| `name` | how the target is addressed with `--target` |
| `serverType` | `SASVIYA`, `SAS9` or `SASJS` |
| `serverUrl` | protocol, host and port of the SAS environment |
| `appLoc` | the SAS folder the project deploys into |
| `contextName` | the Viya compute context, eg `SAS Job Execution compute context` |
| `serverName`, `repositoryName` | SAS 9 only - where the SAS web services are deployed |
| `authConfig`, `authConfigSas9` | credentials, saved here for a global target only |
| `httpsAgentOptions` | TLS settings for this target |

Credentials for a local target are not in this file: they live in `.env.<target>` in the project, written by [`sasjs add`](add.md) - see [the ENV file](env.md).

## Reference

Every key, with its type, defaults and allowed values, is generated from the JSON schema: [sasjsconfig reference](/sasjsconfig.html).

Adding `$schema` at the top of the file lets an editor that understands JSON schemas complete and check the keys as you type - this is what [`sasjs create`](create.md) and [`sasjs init`](init.md) write:

```json
{
  "$schema": "https://cli.sasjs.io/sasjsconfig-schema.json",
  "defaultTarget": "viya",
  "targets": [
    {
      "name": "viya",
      "serverType": "SASVIYA",
      "serverUrl": "https://sas.example.com",
      "appLoc": "/Public/app"
    }
  ]
}
```

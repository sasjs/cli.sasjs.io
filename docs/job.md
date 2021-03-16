---
layout: article
title: Managing SAS Viya Jobs with SASjs
description: Documentation on how to use the SASjs CLI to manage SAS Jobs in Viya
---

# sasjs job

The `sasjs job` command enables developers to perform operations on SAS Viya Jobs.

## Prerequisites

Before using this command, you will need to:

- [install](/installation) the SASJS CLI
- [add](/add) a deployment target.

## Syntax

```
sasjs job <action> <job path> [additional arguments]
```

Additional arguments may include:

- `--target` (alias `-t`) - the target environment in which to deploy the services. If not specified, default target will be used, mentioned in `sasjsconfig.json`. The target can exist either in the local project configuration or in the global `.sasjsrc` file.
- `--output` (alias `-o`) - path where output of the finished job execution will be saved.
- `--log` (alias `-l`) - path where the log of the finished job will be saved (if used, `-w` is implied).
- `--wait` (alias `-w`) - if present, CLI will wait for job completion.
- `--returnStatusOnly` (alias `-r`) - If present and wait flag is provided, CLI will job status only (0 = success, 1 = warning, 3 = error).
- `--ignoreWarnings` (alias `-i`) - If present and return status only is provided, CLI will return status '0', when the job state
  is warning.

## sasjs job execute

Used to execute a job on the SAS server.

### Syntax

> `sasjs job execute /Public/folder/someJob -l ./jobLog.log -o ./jobOutput.json -t targetName`

### Usage

```
# run the job using the target defined in sasjs add
sasjs job execute /Public/job -l ./jobLog.log -o ./jobOutput.json -t myTarget
```

This will create a session and run a SAS job. The log and output will be returned as files in the current directory.

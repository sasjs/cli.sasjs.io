---
layout: article
title: Managing SAS Jobs with SASjs
description: Documentation on how to use the SASjs CLI to manage SAS Jobs

---

sasjs job
====================

The `sasjs job` command enables developers to perform operations on jobs which are on server.

## Prerequisites

Before using this command, you will need to:

* [install](/installation) the SASJS CLI
* [add](/add) a deployment target.

## Syntax

```
sasjs job <action> <job path> [additional arguments]
```

Additional arguments may include:

* `--target` (alias `-t`) - the target environment in which to deploy the services.  If not specified, the first target will be used instead.
* `--output` (alias `-o`) - path where output of the finished job execution will be saved
* `--log` (alias `-l`) - path where log of the finished job execution will be saved


## sasjs job execute

Used to execute a job on server.

### Syntax

> `sasjs job execute /Public/job -l ./jobLog.log -o ./jobOutput.json -t targetName`

### Usage

```
# run the job using the target defined in sasjs add
sasjs job execute /Public/job -l ./jobLog.log -o ./jobOutput.json -t myTarget
```

This will create a session and run a SAS job. The log and output will be returned as a files in the current directory.
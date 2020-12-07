---
layout: article
title: Executing SAS job on the server from the commandline
description: SASjs CLI lets you execute SAS job in a Viya Compute Session, that is on server directly from the terminal (or commandline session).
og_image: https://sasjs.io/img/sasjs-cli-run.png?_=1
---

sasjs request
====================

The `sasjs request` command enables developers to submit SAS job for execution from the commandline.

## Prerequisites
Before using this command, you will need to [install](/installation) the SASJS CLI and add a deployment [target](/add).

## Syntax

```
sasjs request <sasProgramPath> [additional arguments]
```

`sasProgramPath` - if this has a leading slash (eg /Public/app/folder/servicename)
then it must be the full path. If it is a relative path (eg path/servicename) then
it will be pre-pended with the appLoc - which must then be defined in the sasjs config.

Additional arguments may include:

* `--target` (alias `-t`) - the target environment in which to deploy the services.  If not specified, the first target will be used instead.
The target can exist either in the local project configuration or in the global .sasjsrc file.

* `--data` (alias `-d`) - (optional) it is accepting `json` file which should include data that you want to pass as a parameter in executing a request.

* `--config` (alias `-c`) - (optional) it is accepting `json` file which should include config that you want to pass as a parameter in executing a request.


## sasjs request

This will create a session and execute given SAS job. The output will be returned as a file in the current directory.

### Syntax

> `sasjs request some/job -d ./dataFile.json -c ./configFile.json -t myTarget`

### Usage

```
# run the SAS job on the target
sasjs request some/job -t myTarget
```
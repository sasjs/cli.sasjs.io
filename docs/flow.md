---
layout: article
title: SAS Viya Jobs scheduler that allows execute jobs sequentially
description: Documentation on how to use the SASjs CLI to schedule SAS Jobs in Viya

---

sasjs job
====================

The `sasjs flow` command enables developers to schedule SAS Viya Jobs.

## Prerequisites

Before using this command, you will need to:

* [install](/installation) the SASJS CLI
* [add](/add) a deployment target.
* Create flow source file.

## Syntax

```
sasjs flow <action> [additional arguments]
```

Additional arguments may include:

* `--source` (alias `-s`) - path to the flow source file (\*.json).
* `--logFolder` (alias `-l`) - path to the folder where job logs will be saved.
* `--csvFile` (alias `-c`) - path where CSV file containing job statuses will be saved.
* `--target` (alias `-t`) - the target environment in which to deploy the services. If not specified, the first target will be used instead.


## sasjs flow execute

Used to execute a flow of jobs on the SAS server.

### Syntax

> `sasjs flow execute --source /local/flow.json --logFolder /local/log/folder --csvFile /local/some.csv -t targetName`

### Usage

```
# run the flow of jobs using the target defined in sasjs add
sasjs flow execute -s /local/flow.json -l /local/log/folder --csvFile /local/some.csv -t myTarget
```

This will schedule SAS jobs and execute them sequentially. Job logs will be returned as files and saved to the local folder. Job statuses will be saved to CSV file.

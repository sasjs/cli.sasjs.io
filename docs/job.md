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

## sasjs job execute

Used to execute a job on the SAS server.

### Syntax

```
sasjs job execute <job path> [additional arguments]
```

Additional arguments may include:

- `--log` (alias `-l`) - path where the log of the finished job will be saved (if used, `-w` is implied).
- `--output` (alias `-o`) - path where output of the finished job execution will be saved.
- `--source` (alieas `-s`) - Provide the path to an input JSON containing job variables, structured as follows:  `{"macroVars":{"varname":"value","var2":"val2"}}`
- `--target` (alias `-t`) - the target environment in which to deploy the services. If not specified, default target will be used, mentioned in `sasjsconfig.json`. The target can exist either in the local project configuration or in the global `.sasjsrc` file.
- `--verbose` (alias `-v`) - if present, CLI will log summary of every HTTP request/response. If set to 'bleached' (eg `-v bleached`), CLI will log summary of every HTTP response without extra colors.

The following flags are only relevant for serverType VIYA:

- `--ignoreWarnings` (alias `-i`) - If present and return status only is provided, CLI will return status '0', when the job state is warning.
- `--wait` (alias `-w`) - if present, CLI will wait for job completion.
- `--returnStatusOnly` (alias `-r`) - deprecated

### Examples

```bash
# run the job using the target defined in sasjs add
sasjs job execute /Public/folder/someJob -l ./jobLog.log -o ./jobOutput.json -t myTarget
```

This will create a session and run a SAS job. The log and output will be returned as files in the current directory.


```bash
# create an input file with macro variables
echo '{"macroVars":{"myMacVar":"my macro value!","macvar2":"another value"}}' > sourcevars.json
# execute the job with the above variables, against the default target
sasjs job execute /Public/folder/someJob -l ./jobLog.log -s ./sourcevars.json
```


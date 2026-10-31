---
layout: article
title: Execute SASjs web services from the commandline
description: The SASjs CLI allows you execute SASjs web services directly from the command line
---

# sasjs request

The `sasjs request` command enables developers to call SASjs web services from the commandline.


## Prerequisites

Before using this command, you will need to [install](/installation) the SASJS CLI and add a deployment [target](/add).

## sasjs request

This will create a session and execute the relevant SAS service. The output will be returned as a file in the current directory (`output.json`).

### Syntax

```
sasjs request <sasProgramPath> [additional arguments]
```

`sasProgramPath` - if this has a leading slash (eg /Public/app/folder/servicename) then it must be the full path. If it is a relative path (eg path/servicename) then it will be pre-pended with the appLoc - defined in the config JSON file.

Additional arguments may include:

| Option | Alias | Description |
| --- | --- | --- |
| `--target` | `-t` | The target to send the request to. Defaults to `defaultTarget` in `sasjsconfig.json`, then the global `.sasjsrc`. |
| `--data` | `-d` | A JSON file of input data - the tables the service reads. |
| `--config` | `-c` | A JSON file of configuration for the request. |
| `--log` | `-l` | Where to save the log. Inside a project it defaults to `sasjsresults`, otherwise the current directory. |
| `--output` | `-o` | Where to save the output. Inside a project it defaults to `sasjsresults`, otherwise the current directory. |

### data structure

The input data is structured as follows:

```
{
    "tablewith2cols1row": [{
        "col1": "val1",
        "col2": 42
    }],
    "tablewith1col2rows": [{
        "col": "row1"
    }, {
        "col": "row2"
    }]
}
```

### Examples

```
# run a SAS Service without inputs, using the default target
sasjs request /Public/app/myApp/common/appinit

# run a SASjs web service with inputs and a config file
sasjs request common/getdata -d ./dataFile.json -c ./configFile.json -t myTarget

# run a SASjs web service with log and output files defined
sasjs request /Public/app/myApp/common/appinit -l ./jobLog.log -o ./jobOutput.json
```

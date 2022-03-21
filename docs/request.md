---
layout: article
title: Execute SASjs web services from the commandline
description: The SASjs CLI allows you execute SASjs web services directly from the command line
og_image: https://sasjs.io/img/sasjs-cli-request.png?_=1
---

# sasjs request

The `sasjs request` command enables developers to call SASjs web services from the commandline.

<script id="asciicast-MwkNw7DFXPoxVvUVXBwpsNUji" src="https://asciinema.org/a/MwkNw7DFXPoxVvUVXBwpsNUji.js" async></script>

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

- `--target` (alias `-t`) - the target environment in which to deploy the services. If not specified, default target will be used, mentioned in `sasjsconfig.json`. The target can exist either in the local project configuration or in the global `.sasjsrc` file.
- `--data` (alias `-d`) - (optional) The path to a `json` file containing the input data passed into the request.
- `--config` (alias `-c`) - (optional) The path to a `json` file containting the config to be used when executing a request.
- `--log` (alias `-l`) - Location in which to store the log file. If not provided AND current directory is a sasjs project, it will be saved in sasjsresults else in the current directory.
- `--output` (alias `-o`) - Location to store the output file. If not provided AND current directory is a sasjs project, an output file will be saved in the sasjsresults folder else in current directory.

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

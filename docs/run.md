---
layout: article
title: Running SAS code from the commandline
description: SASjs CLI lets you run arbitrary SAS code in a Viya Compute Session, directly from the terminal (or commandline session).
og_image: https://sasjs.io/img/sasjs-cli-run.png?_=1
---

# sasjs run

The `sasjs run` command enables developers to submit SAS code for execution from the commandline.

<script id="asciicast-FK3Xr2RhqAjhIcqLLLKD7xCvM" src="https://asciinema.org/a/FK3Xr2RhqAjhIcqLLLKD7xCvM.js" async></script>

The log will be returned as a file in the current directory. The source file must have a ".sas" extension.

Note - an additional variable macro variable will be added by the adapter, with the value of the target [appLoc](https://cli.sasjs.io/sasjsconfig.html#targets_items_anyOf_i0_appLoc) and the filename (equivalent to `%let _program=/My/AppLoc/runfilename.sas;`).  This is actually added as a session variable, so will not be visible in the logs.


## Prerequisites

Before using this command, you will need to [install](/installation) the SASJS CLI and add a deployment [target](/add).

## Syntax

```
sasjs run <sourcecode> [additional arguments]
```

`<sourcecode>` can be a local file path or a URL.

Additional arguments may include:

- `--log` (alias `-l`) - The full or relative (to the folder in which the command is invoked) path to the log file being created.  If ommitted, the log will be created in the current directory, with a timestamp.

- `--target` (alias `-t`) - the target environment in which to deploy the services. If not specified, default target will be used, mentioned in `sasjsconfig.json`. The target can exist either in the local project configuration or in the global `.sasjsrc` file.

### Using Github Urls

If using a URL from github, be sure to link to the _raw_ version of the file, eg: [https://raw.githubusercontent.com/sasjs/core/main/base/mf_getattrc.sas](https://raw.githubusercontent.com/sasjs/core/main/base/mf_getattrc.sas) 

As opposed to: [https://github.com/sasjs/core/blob/main/base/mf_getattrc.sas](https://github.com/sasjs/core/blob/main/base/mf_getattrc.sas)

If you click the links above you will see the difference.  Whenever `<sourcecode>` begins with `http://` or `https://` we simply fetch the contents from the URL - so the raw value should be SAS code and nothing else.

You can find the raw version by clicking on the 'raw' button when viewing the program on github (next to the 'blame' button)


### Examples

Running some local SAS code:
```
# create minimal SAS program
cat > ./somecode.sas <<'EOL'
  %put hello from SASjs;
EOL

# run the SAS code on the target
sasjs run somecode.sas -t myTarget
```

Running some SAS code from github:

```
sasjs run https://raw.githubusercontent.com/sasjs/template_jobs/master/includes/someprogram.sas -t viya
```

## Roadmap

We plan to support the following:

- keeping sessions alive
- extracting items from the session

If there are items you are looking for, or have problems / ideas, do raise an [issue](https://github.com/sasjs/cli/issues).

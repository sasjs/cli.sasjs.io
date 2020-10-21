---
layout: article
title: Building a SAS Project using SASjs
description: The `sasjs build` command takes all of the input jobs and services and creates a build pack ready for deployment into SAS 9 or Viya
---

sasjs build
====================

From the root of the project, run: `sasjs build`.  This will create a deployment script that can be executed in SAS to create the backend services.  The `appLoc` is configured in the `/sas/config.json` file, along with the `serverType` (SAS9 or SASVIYA).  A `buildinit.sas` program can be configured to run, along with specific macro variables (`tgtBuildVars`), according to the settings in `sasjsconfig.json`.

If you have sensitive build variables (such as an `access_token`) you can set these in a `.env` file in your project root.

If the services folder does not exist in the `sasjsbuild` folder, then the `sasjs compile` step is also executed.  The alias to run both compile and build steps is `sasjs cb`.
![sasjscliflow.png](/img/sasjsbuild.png)

### Viya Build Script
The Viya build script requires a number of variables to be prepared by an administrator.  Execute the following:

```sas
filename mc url "https://raw.githubusercontent.com/sasjs/core/main/all.sas";
%inc mc;

/* create random client and secret */
%mv_registerclient(outds=clientinfo)
```

This will generate a URL in the log, which must be followed to generate a refresh code (one time step).  Paste that code into the macro below:

```
/* paste the code below */
%mv_tokenauth(inds=clientinfo,code=xET8ETs74z)

/* extract client, secret & token to the log */
data _null_;
  merge mv_tokenauth clientinfo(drop=error);
  put access_token=;
  put refresh_token=;
  put client_id=;
  put client_secret=;
run;

```

## Calling SAS Viya from SAS 9

When calling SAS Viya from SAS 9, the `oauth_bearer=sas_services` option is not available.  However it is still possible to call the APIs using `proc http` in the [core](https://core.sasjs.io) by putting the ACCESS_TOKEN in a macro variable and referring to that variable in the `access_token_var=` keyword parameter of each viya macro (starting `mv_`).


!!! Warning
    Saving security tokens in project repositories, especially if they are committed to source control, is a security risk - as anyone with access can use them to make modifications on the Viya platform.  Be sure to use a secure mechanism such as the `%inc` from a secure directory, or another approved mechanism for securing these kinds of variables.  Avoid writing Access Tokens to log files.


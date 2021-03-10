---
layout: article
title: Building a SAS Project using SASjs
description: The `sasjs build` command takes all of the input jobs and services and creates a build pack ready for deployment into SAS 9 or Viya
---

sasjs build
====================

From the root of the project, run: `sasjs build`.  This will create a deployment script that can be executed in SAS to create the backend services.  The `appLoc` is configured in the `/sasjs/sasjsconfig.json` file, along with the `serverType` (SAS9 or SASVIYA).  All Jobs and Services (as documented in jobConfig and serviceConfig) will be compiled into a single .sas file (for deployment in SAS 9, Base SAS or SPRE) and a .json file (for deployment using the Viya APIs)


If the jobs or services folder does not exist in the temporary `sasjsbuild` folder, then the `sasjs compile` step is also executed.  The alias to run both compile and build steps is `sasjs cb`.
![sasjscliflow.png](/img/sasjsbuild.png)

### Viya Build Script

The .sas file can be executed in SASStudioV *without modification* (proc http will use the `oauth_bearer=sas_services` option).

If for some reason you need to run the Viya build script in a non SPRE session (eg in SAS 9 or Base SAS) you will need to prepare the access token - see guidance here:

Put this access token in a macro variable called ACCESS_TOKEN and it will be used by `proc http` in the [core](https://core.sasjs.io) macros by reference to the `access_token_var=` keyword parameter of each viya macro (the ones that start with `mv_`).


!!! Warning
    Saving security tokens in project repositories, especially if they are committed to source control, is a security risk - as anyone with access can use them to make modifications on the Viya platform.  Be sure to use a secure mechanism such as the `%inc` from a secure directory, or another approved mechanism for securing these kinds of variables.  Avoid writing Access Tokens to log files.


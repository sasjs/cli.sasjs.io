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
%let client=MyClient;
%let secret=MySecret;
%mv_getapptoken(client_id=&client,client_secret=&secret)
```
This will generate a URL in the log, which must be followed to generate a refresh code (one time step):

```
%mv_getrefreshtoken(client_id=&client,client_secret=&secret,code=wKDZYTEPK6)
```

The ACCESS_TOKEN and REFRESH_TOKEN are now in the log.  In future, when running `sasjs build` for a Viya target, the following values must be provided:

```sas
%let client=MyClient;
%let secret=MySecret;
/* these values are long - split over multiple lines with %trim()*/
%let ACCESS_TOKEN=MyGeneratedAccessToken;
%let REFRESH_TOKEN=MyGeneratedRefreshToken;
```

The above can then be securely placed in a read-protected directory (such as a home directory on the SAS server) and `%inc`'d.

!!! Warning
    Saving security tokens in project repositories, especially if they are committed to source control, is a security risk - as anyone with access can use them to make modifications on the Viya platform.  Be sure to use a secure mechanism such as the `%inc` approach described above, or another approved mechanism for securing these kinds of variables.


---
layout: article
title: Building a SAS Project using SASjs
description: The `sasjs build` command takes all of the input jobs and services and creates a build pack ready for deployment
---

# sasjs build

For ease of project deployment, `sasjs build` brings all the compiled Jobs / Services / Tests together into a single file.  Actually, 3 files, as follows:

* `sasjsbuild/target.json` - used to deploy using the APIs in Viya or SASjs Server
* `sasjsbuild/target.json.zip` - used for faster uploads of large payloads in SASjs Server
* `sasjsbuild/target.sas` - used to create the project in SAS 9 or Viya (when no access token is available)

The filename corresponds to the target name unless [buildOutputFileName](https://cli.sasjs.io/sasjsconfig.html#buildConfig_buildOutputFileName) is specified.

If a jobs or services folder does not exist in the temporary `sasjsbuild` folder, then the `sasjs compile` step is also executed. The alias to run both compile and build steps is `sasjs cb`.

The benefit of having a seperate command to prepare the build artefacts (rather than bundling it into `sasjs compile`) is that you can then modify the compiled outputs to ensure you have the build you want - for example, removing tests for a production deploy.  If you don't need such changes, then you can just run `sasjs cb` as a shortcut for both `sasjs compile` and `sasjs build`.


## Target.JSON Build Artefact

The JSON file is used by the `sasjs deploy` command for the `SASVIYA` serverType to create all the necessary folders, jobs, services & tests (and streamed web apps) in the target `appLoc`.

## Target.json.ZIP Build Artefact

This is simply a zipped version of the target.json file, and is used when uploading apps or deploying projects to [SASjs Server](https://server.sasjs.io).

## Target.SAS Build Artefact

The generated SAS program can be executed directly in SAS 9 or SAS Viya to create all the jobs/services/tests programmatically. This is especially useful for Viya developers who are unable to obtain a client / secret. For SAS 9 it is the primary deployment method.

![sasjscliflow.png](/img/sasjsbuild.png)

### SAS 9 Build Script

The SAS 9 Build Program can be executed in EG or SAS Studio, and also automatically as part of `sasjs deploy` when `deployServicePack` is true.  You just need to have a runner in your metadata home directory, and to provide credentials using [sasjs auth](/auth).

### Viya Build Script

The .sas file can be executed in SASStudioV _without modification_ as proc http will use the `oauth_bearer=sas_services` option to authenticate to the APIs.  This is the way to deploy SASjs projects when you do not have a CLIENT or SECRET.

### Running Viya Build Script in Non-Viya-Enabled SAS sessions

If for some reason you need to run the _Viya_ build script in a _non_ SPRE / Viya-enabled session (eg in SAS 9 or SASjs Server) you will need to prepare the access token - see guidance here: [https://cli.sasjs.io/faq/#viya-token-macros](https://cli.sasjs.io/faq/#viya-token-macros)

Put this access token in a macro variable called `ACCESS_TOKEN` and it will be used by `proc http` in the [core](https://core.sasjs.io) macros by reference to the `access_token_var=` keyword parameter of each viya macro (the ones that start with `mv*`).

!!! Warning
    Saving security tokens in project repositories, especially if they are committed to source control, is a security risk - as anyone with access can use them to make modifications on the Viya platform. If you are running Viya code in non Viya-enabled SAS environments using the ACCESS_TOKEN approach described above, be sure to use a secure mechanism such as `%inc` from a secure directory, or another approved mechanism for securing these kinds of variables. Avoid writing Access Tokens to log files.

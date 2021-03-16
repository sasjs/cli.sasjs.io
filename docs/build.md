---
layout: article
title: Building a SAS Project using SASjs
description: The `sasjs build` command takes all of the input jobs and services and creates a build pack ready for deployment into SAS 9 or Viya
---

# sasjs build

From the root of the project, run: `sasjs build`. This will create a deployment script that can be executed in SAS to create the backend services. The `appLoc` is configured in the `/sasjs/sasjsconfig.json` file, along with the `serverType` (SAS9 or SASVIYA). All Jobs and Services (as documented in jobConfig and serviceConfig) will be compiled into a single .sas file (for deployment in SAS 9, Base SAS or SPRE) and a .json file (for deployment using the Viya APIs)

If the jobs or services folder does not exist in the temporary `sasjsbuild` folder, then the `sasjs compile` step is also executed. The alias to run both compile and build steps is `sasjs cb`.
![sasjscliflow.png](/img/sasjsbuild.png)

### JSON Build File

The JSON file contains all jobs and services and is used by the `sasjs deploy` command to create all the necessary folders, jobs & services (and streamed web apps) in the folder specified in the `appLoc` property of the target config. This approach can only be used by SAS Viya.

## SAS Build Program

The SAS file can be executed directly in SAS 9 or SAS Viya to create all the services programmatically. This is useful for Viya developers who are not able to obtain a client / secret. For SAS 9 it is the primary deployment method.

A workflow could be to define a `deployScript` in your `deployConfig` so that the generated SAS program is ssh'd (rsync) to your SAS server, and then you could `curl` a SAS 9 Stored Process that `%include`'s your SAS build program. This allows fully automated SAS 9 deployments.

### Viya Build Script

The .sas file can be executed in SASStudioV _without modification_ as proc http will use the `oauth_bearer=sas_services` option to authenticate to the APIs.

If for some reason you need to run the Viya build script in a non SPRE session (eg in SAS 9 or Base SAS) you will need to prepare the access token - see guidance here: [https://cli.sasjs.io/faq/#viya-token-macros](https://cli.sasjs.io/faq/#viya-token-macros)

Put this access token in a macro variable called ACCESS*TOKEN and it will be used by `proc http` in the [core](https://core.sasjs.io) macros by reference to the `access_token_var=` keyword parameter of each viya macro (the ones that start with `mv*`).

!!! Warning
Saving security tokens in project repositories, especially if they are committed to source control, is a security risk - as anyone with access can use them to make modifications on the Viya platform. Be sure to use a secure mechanism such as the `%inc` from a secure directory, or another approved mechanism for securing these kinds of variables. Avoid writing Access Tokens to log files.

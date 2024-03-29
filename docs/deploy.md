---
layout: article
title: Deploying a SAS Project using SASjs
description: The `sasjs deploy` command performs the actual deployment of a SASjs project into SAS 9 or Viya
og_image: https://i.imgur.com/gIYp5OG.png
---

# sasjs deploy

Deploy to multiple servers, server types (Viya, EBI, Base), multiple folders (Drive or Metadata) within those folders, and with multiple configurations, each with a simple alias - a target `name`.

The ability to easily deploy (and subsequently execute) your SAS code enables you to develop locally using established GIT workflows.

![](https://i.imgur.com/gIYp5OG.png)

## Prerequisites

Before using this command, you will need to install the SASJS CLI and:

- [add a deployment target](/add).
- [compile services](/compile).
- [build services](/build).

## Syntax

The build program generated in the previous step can be deployed in 3 ways:

1 - MANUAL: copy paste the code into Studio or Enterprise Guide and run it

2 - SSH: build a shell script or bat file to load, and execute with a web service

3 - API: use the SAS APIs

2nd and 3rd options can be configured and executed with a single command:

```
sasjs deploy --target(-t) <target name>
```

or:

```
sasjs d --target(-t) <target name>
```

You can compile, build and deploy using:

```
sasjs cbd --target(-t) <target name>
```

If you don't specify a target (eg `sas9` or `viya`) then the default target in the `sasjsconfig.json` file is used. If local configuration file is not found, global `.sasjsrc` file will be used.

NOTE: By default deploy will overwrite an existing deploy (force deploy).

### Copy/Paste approach

The build script (named as per `buildOutputFileName`) can be copy pasted into SAS Studio and executed to create the backend services. Please note:

- You will be running under your own identity. If you need files created under the Web Server identity, deploy your build script using a web service.
- For Viya, you must use SASStudioV (or ensure the client/secret/access_token are provided)

### SSH approach

You can SSH (rsync or scp) your build script onto the SAS Server then `%inc` it from a web service - the web service could be created using the code below:

```sas
filename mc url "https://raw.githubusercontent.com/sasjs/core/main/all.sas";
%inc mc;
filename ft15f001 temp;
parmcards4;
  %inc "/path/to/your/sasjsdeploy.sas"/source2;
;;;;
%mp_createwebservice(name=Executor, code=ft15f001 ,replace=YES)
```

This creates the service in your HOME directory (SAS 9 or Viya).

You can now create a local script (eg `mysas9deploy.sh`) and add it to the [deployScripts](https://cli.sasjs.io/sasjsconfig.html#targets_items_anyOf_i0_deployConfig_deployScripts) array (the root is always the directory containing the `sasjs` folder).

```bash
echo "sasjs: uploading frontend"
rsync -avz /home/me/myapp/dist/* me@sasserver:/var/www/html/myapp

echo "sasjs: uploading deploy program"
scp sasjsbuild/mysas9deploy.sas me@sasserver:/tmp/mysas9deploy.sas

echo "sasjs: running Executor"
curl -v -L -k  -b cookiefile -c cookiefile "$URL&$CREDS"
```

### API Approach

Any files in your `deployScripts` array that have a ".sas" extension will be sent to the relevant SAS Server for execution.

#### Viya API deployment

The Viya deploy requires 3 things:

- access_token
- serverUrl
- contextName

In order of priority, the `access_token` is taken from the`.env.targetname` file, then the `.env` file (if not found).

The `serverUrl` is the location of your Viya server. The `contextName` is the execution service on which your SAS code will execute. You can get a list of available contexts by running a `GET` to the following endpoint: `/compute/contexts`



---
layout: article
title: SASjs Add
description: The `sasjs add` command provides a series of prompts used to define a SAS target
og_image: https://cli.sasjs.io/img/sasjsaddcred.png
---


# sasjs add

The `sasjs add` command provides a series of prompts used to define a SAS [target](https://sasjs.io/glossary#target) along with the relevant connection details (if SAS Viya).

<script id="asciicast-8CZROaVsvobDCumlqgxrhHkE3" src="https://asciinema.org/a/8CZROaVsvobDCumlqgxrhHkE3.js" async></script>


## Syntax

```
sasjs add

sasjs add cred -t targetname # add creds for existing target
```
![](https://cli.sasjs.io/img/sasjsaddcred.png)
## Description

### Local or Global Config

The first prompt requests scope. If Local is chosen, the target configuration will be added in the `/sasjs/sasjsconfig.json` file, and any credentials (eg tokens) will be saved in a `.env.[targetName]` file in the current SASjs project directory.

If Global is chosen, the target configuration will be added to a `.sasjsrc` file in the users home directory. The `sasjs` command will look for a target here if executed outside of a SASjs project.

### Server Type

The second prompt requests a server type. Options:

1. SAS Viya - works on 3.5 and 4
2. SAS 9 - to execute code on SAS 9
3. SASjs - for deploying to [SASjs Server](https://github.com/sasjs/server)

### Target Name

Choose a name for your target. Nearly every SASjs command will take this as input, so you might want to keep it short.

### Target Server URL

This is the protocol / servername / port of your target, for instance: `https://sas.sasjs.com:8080`

### SAS Viya Specific

If SAS Viya was chosen as the server type you will be prompted for a Viya Client ID and secret - this is used for connecting to the SAS Viya REST APIs. To autogenerate these you can also check out the [Viya Token Generator](https://sasjs.io/videos/#deploying-and-using-the-viya-token-generator).

Once you have entered the client and secret, you will be given a link - click this to generate the authorisation code (one time step).

The token will eventually expire - the majority of commands will show the link again at this point to refresh the token. To avoid this happening in batch, be sure your token remains valid, eg by setting a longer expiry period.

<script id="asciicast-361849" src="https://asciinema.org/a/361849.js" async></script>

### SAS 9 Specific

If SAS 9 was chosen as the serverType then the server name should be chosen (eg SASApp) and the metadata repository in which to deploy the SAS Web Services. Default is Foundation.

<script id="asciicast-361844" src="https://asciinema.org/a/361844.js" async></script>


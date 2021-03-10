---
layout: article
title: Frequently Asked SASjs Questions
description: Common questions and answers when working with the SASjs Command Line Interface
---

FAQ
====================

## What is the difference between local and global targets?

A target is a set of attributes (eg server URL, SAS Folder location) to which a project will be deployed, or some code executed.  When running locally, inside a project (eg a GIT repository) these attributes are taken from the `sasjsconfig.json` file, whilst any authorisation attributes are retrieved from the `.env.$(targetname)` file (where they are typically `.gitignore`'d for security).

When running outside of a project, the attributes are taken from the global `~/.sasjsrc` file in the user home directory.  In this case, the authorisation details are also stored in the same file (authConfig).

The `sasjs` command will "discover" if it is inside a local project by the presence of a `sasjs/sasjsconfig.json` file in the current, or any of the parent directories.  If not found, then the `~/.sasjsrc` file will be searched instead.

It's worth noting that there are typically MORE attributes defind in a _local_ target, because this is where an application is normally configured in detail for deployment.  The _global_ target is more for general use, such as running arbitrary jobs or SAS code.

A diagram of the rules for determining whether a local or remote target is used is available below.

<!-- source: https://excalidraw.com/#room=0e0163e79c486da603dd,OrjYfbOmt6OTc64ND7Qf6Q -->

![SAS target](/img/targetBehaviour.svg)

## How can I obtain a Viya client and secret?

For setting up the client / secret you will need the services of an administrator (a user with admin rights on the physical machine) as they need to query a protected file (the consul token).  The client must have the 'authorization_code' grant type.

SASjs provides two tools to make this easy:

### Viya Token Generator

This is a web app for configuring a client & secret in multiple ways.

To deploy, see here: https://sasjs.io/apps/#viya-client-token-generator

### SAS Code approach

You can also generate a client / secret (and access / refresh token) using SAS code using the @sasjs/core macros.

```sas
/* compile the macros from github */
filename mc url "https://raw.githubusercontent.com/sasjs/core/main/all.sas";
%inc mc;

/* create random client and secret */
%mv_registerclient(outds=clientinfo)
```

This will generate a URL in the log, which must be followed to generate a refresh code (one time step).  Paste that code into the macro below to generate an access / refresh token:

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

## How Does Authentication / Token Management work with SAS Viya?

The CLI will only work with client / secret pairs that have the 'authorization_code' grant type.  It will not work with a username / password (Basic Authentication) approach, for security reasons.

Once you provide the client (and secret) to SASjs, either as part of `sasjs add` or `sasjs add cred` then a URL is presented to which the user must authenticate the CLIENT_ID.

Once the user provides the authorisation code, the CLI uses the client / secret / auth code to obtain an ACCESS_TOKEN and REFRESH_TOKEN.

The ACCESS_TOKEN may then be used for API requests until it expires. On expriy, or getting very close to it, the CLI will use the REFRESH_TOKEN to obtain a fresh ACCESS_TOKEN.

Once the REFRESH_TOKEN expires, the CLIENT must be re-authenticated using SAS Logon.

<!-- source: https://lucid.app/lucidchart/e5ff1d2a-9d6a-4ae5-a990-a2a036d792f3/edit?page=O3h49Ot7ObFc# -->

![SAS token authentication](/img/tokenmanagementsasviya.svg)
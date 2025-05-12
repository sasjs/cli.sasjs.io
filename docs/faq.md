---
layout: article
title: Frequently Asked SASjs Questions
description: Common questions and answers when working with the SASjs Command Line Interface
---

# FAQ

## What is the difference between local and global targets?

A target is a set of attributes (eg `serverUrl`, `serverType`, `appLoc`) to which a project will be deployed, or some code executed. When running **locally**, inside a project (eg a GIT repository) these attributes are taken from the `sasjs/sasjsconfig.json` file.  By contrast, any (sensitive) authorisation attributes are retrieved from the `.env.$(targetname)` file, which is typically `.gitignore`'d for security.

When running **outside** of a project, the attributes are taken from the global `~/.sasjsrc` file in the user home directory. In this case, authorisation details are also stored in the same file (authConfig).

The `sasjs` command will "discover" if it is inside a local project by the presence of a `sasjs/sasjsconfig.json` file in the current, or any of the parent directories. If not found, then the `~/.sasjsrc` file will be searched instead.

It's worth noting that there are typically MORE attributes defind in a _local_ target, because this is where an application is normally configured in detail for deployment. The _global_ target is more for general use, such as running arbitrary jobs or SAS code.

A diagram of the rules for determining whether a local or remote target is used is available below.

<!-- source: https://excalidraw.com/#room=0e0163e79c486da603dd,OrjYfbOmt6OTc64ND7Qf6Q -->

![SAS target](/img/targetBehaviour.svg)

## How can I obtain a Viya client and secret?

For setting up the client / secret you will need the services of an administrator (a user with admin rights on the physical machine) as they need to query a protected file (the consul token). The client must be created with the 'authorization_code' grant type.  If you are building a standalone application, it is also recommended to increase the expiry period of the refresh token to avoid manual re-authentications.  The default expiry is 24 hours for an access token, and 30 days for a refresh token. This can be extended up to around 60 or 70 years.  

## Viya 2025

The latest instructions are available [here](https://developer.sas.com/docs/rest-apis/getting-started/authentication).  Our recommended approach is to use the browser as follows:

1.  Open the following url as an administrator:  `https://<sas-server>/SASLogon/oauth/authorize?client_id=sas.cli&response_type=token`
2.  This will redirect to a new url.  Extract the `access_token` parameter and use it in the query below:


```bash
curl -k -X POST "https://viya-f0g8ht62vq.engage.sas.com/SASLogon/oauth/clients" \
   -H "Content-Type: application/json" \
   -H "Authorization: Bearer VERY_LONG_ACCESS_TOKEN_FROM_STEP_ABOVE" \
   -d '{"client_id": "YOUR_CLIENT","client_secret": "YOUR_SECRET","scope": ["openid"],"authorized_grant_types": ["authorization_code","refresh_token"], "redirect_uri": "urn:ietf:wg:oauth:2.0:oob"}'
```

This will create a YOUR_CLIENT and YOUR_SECRET client/secret pair using the authorization_code grant type (suitable for SASjs).

### Legacy Tools

SASjs provides two legacy tools for older versions of Viya:

**Viya Token Web App**

This is a web app for configuring a client & secret in multiple ways.  Only valid for Viya 3.5

To deploy, see here: [https://sasjs.io/apps/#viya-client-token-generator](https://sasjs.io/apps/#viya-client-token-generator)

**Viya Token Macros**

You can also generate a client / secret (and access / refresh token) using SAS code, on both Viya 3.5 and Viya 4, using the [mv_registerclient](https://core.sasjs.io/mv__registerclient_8sas.html) macro.

```sas
/* compile the macros from github */
filename mc url "https://raw.githubusercontent.com/sasjs/core/main/all.sas";
%inc mc;

/* create random client and secret on Viya 3.5 (admin rights needed) */
%mv_registerclient(outds=clientinfo)

/* create random client and secret on Viya 4 (consul token needed) */
%mv_registerclient(consul_token=12x34sa43v2345n234lasd)
```

This will generate a URL in the log, which must be followed to generate a refresh code (one time step). Paste that code into the macro below to generate an access / refresh token:

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

The CLI will only work with client / secret pairs that have the 'authorization_code' grant type. It does not support the username / password (Basic Authentication) approach, for security reasons.

Once you provide the client (and secret) to SASjs, either as part of `sasjs add` or `sasjs auth` then a URL is presented to which the user must authenticate the CLIENT_ID.

Once the user provides the authorisation code, the CLI uses the client / secret / auth code to obtain an ACCESS_TOKEN and REFRESH_TOKEN.

The ACCESS_TOKEN may then be used for API requests until it expires. On expriy, or getting very close to it, the CLI will use the REFRESH_TOKEN to obtain a fresh ACCESS_TOKEN.

Once the REFRESH_TOKEN expires, the CLIENT must be re-authenticated using SAS Logon.

More information on token expiry is available [here](https://communities.sas.com/t5/SAS-Communities-Library/Tuning-the-authentication-timeout-for-long-running-jobs/ta-p/834148).

The below diagram illustrates this flow, but not precisely - the diagram describes the flow for a deployed application, where the secret can be secured at backend.  In the SASjs CLI case the entire app is frontend (nothing to deploy at backend), and so the SECRET must also be kept on the frontend.

<!-- source: https://lucid.app/lucidchart/e5ff1d2a-9d6a-4ae5-a990-a2a036d792f3/edit?page=O3h49Ot7ObFc# -->

![SAS token authentication](/img/tokenmanagementsasviya.svg)

## Why does SASjs take so long to install?

Actually it doesn't, it should be fast.  If you're waiting a long time (eg, over a minute) then the following _may_ be the root cause:

* Virus Scanner checking every file that is downloaded
* Proxy settings (in which case, update the PAC file)
* Slow network connection

The PAC file issue will only apply in corporate settings.  The steps to address:

1. Look in PAC for your proxy settings
2. Set them in npm
    - `npm config set proxy <<address>>`
    -` npm config set https-proxy <<address>>`

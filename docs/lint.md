---
layout: article
title: sasjs lint
og_title: Lint Your SAS and Prevent Sloppy Code Going Into Production
description: Lint your SAS code and identify issues such as embedded passwords, trailing spaces, sloppy indentation, missing program headers and more.
og_image: https://user-images.githubusercontent.com/4420615/113478713-800e1d00-9482-11eb-90c1-10a80a41be1a.png
---

# sasjs lint

The `sasjs lint` command is used to identify issues such as embedded passwords, trailing spaces, sloppy indentation, missing program headers and more, in your SAS code.

This means developers can spend less time on code reviews and formatting fixes, as well as preventing dangerous code, or code with hard-to-detect bugs from hitting production servers.


## Prerequisites

Before using this command, you simply need to [install](/installation) the SASjsCLI.  It is NOT necessary to configure a sasjsconfig.json file - the `sasjs lint` command can be executed from anywhere - including from within a git hook.  

The lint settings are described [here](https://github.com/sasjs/lint/blob/main/README.md).

## Syntax

```
sasjs lint <action>
```

## sasjs lint

### Syntax
```bash
sasjs lint
```

### Usage
Simply run the command and the list of exceptions (along with line / column numbers) is shown in the console, eg:

![sas lint](https://user-images.githubusercontent.com/4420615/113478713-800e1d00-9482-11eb-90c1-10a80a41be1a.png)

## sasjs lint fix

### Syntax
```bash
sasjs lint fix
```

### Usage
Simply run the command and the exceptions are fixed!  The following rules are supported for 'autofix':

* noTrailingSpaces
* hasDoxygenHeader
* hasMacroNameInMend
* lowerCaseFileNames

## Usage in a GIT hook

The `sasjs lint` command will return a non-zero exit code if any exceptions are found.  A great way to prevent questionable code from ever hitting your GIT repo (let alone the production server) is to run the linter as part of a pre-commit hook.

To configure this, there are two steps.  Firstly, run `npm install ghooks --save-dev`.  Then add the following to your `package.json` file:

```
  "config": {
    "ghooks": {
      "pre-commit": "sasjs lint"
    }
  }
```

If you run `sasjs create SOMEPROJECT -t jobs` you can check out a sample project with this hook already configured.  Or, you can just [click here](https://gitpod.io/#https://github.com/sasjs/template_jobs).


## Sponsorship & Contributions

SASjs is an open source framework!  Contributions are welcomed.  If you would like to see a feature, because it would be useful in your project, but you don't have the requisite (typescript) experience - then how about you engage us on a short project and we build it for you?

Contact [Allan Bowe](https://www.linkedin.com/in/allanbowe/) for further details.

## SAS 9 Health check

The SASjs Linter (and formatter) is a great way to de-risk and accelerate the delivery of SAS code into production environments.  However, code is just one part of a SAS estate.  If you are running SAS 9, you may be interested to know what 'gremlins' are lurking in your system.  Maybe you are preparing for a migration.  Maybe you are preparing to hand over the control of your environment.  Either way, an assessment of your existing system would put minds at rest and pro-actively identify trouble spots.

The SAS 9 Health Check is a 'plug & play' product by our sponsor, [SAS Apps](https://sasapps.io).  It uses the [SAS 9 REST API](https://sas9api.io) to run hundreds of metadata and system checks to identify common problems.  The checks are non-invasive, and becuase it is a client app, there is NOTHING TO INSTALL on your SAS server.  We offer this assessment for a low fixed fee, and if you engage our (competitively priced) services to address the issues we highlight, then the assessment is free.

Contact [Allan Bowe](https://www.linkedin.com/in/allanbowe/) for further details.

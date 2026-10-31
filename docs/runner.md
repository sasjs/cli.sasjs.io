---
layout: article
title: SAS EBI Runner
description: SAS 9 EBI operations require the SASjs Runner - a stored process in your metadata home folder that the CLI submits code to.
---

# Runner

SAS 9 has no API for running arbitrary code, so the CLI submits it to a stored process in your own metadata folder - the SASjs Runner. Deploy the runner once per user, and every SAS 9 operation works from then on.

## Which commands need it

On a **SAS 9** target, every command that submits code goes through the runner:

- [`sasjs run`](run.md) - the program you pass it
- [`sasjs test`](test.md) - the test suite
- [`sasjs fs`](fs.md) - the synchronisation programs it generates
- [`sasjs deploy`](deploy.md) - the `deployScripts` in the target's `deployConfig`

Commands that call a job or a web service directly - [`sasjs job`](job.md), [`sasjs request`](request.md) - do not use it.

SAS Viya and SASjs Server need no runner.

## Where it lives

```
/User Folders/<your metadata user>/My Folder/sasjs/runner
```

The path follows the account the CLI authenticates as, so each SAS 9 user deploys their own. Nothing is shared and nothing needs an administrator.

## Deploying it

Run this once, in any SAS 9 session authenticated as that same user - Enterprise Guide, SAS Studio, or a stored process:

```sas
/* import the macros */
filename mc url "https://raw.githubusercontent.com/sasjs/core/main/all.sas";
%inc mc;

/* create the runner */
filename ft15f001 temp;
parmcards4;
%macro sasjs_runner();
%if %symexist(_webin_fileref) %then %do;
%inc &_webin_fileref;
%end;
%mend sasjs_runner;
%sasjs_runner()
;;;;
%mm_createwebservice(
  path=/User Folders/&_metauser/My Folder/sasjs,
  name=runner
)
```

`%mm_createwebservice` creates the folder if it does not exist, registers the stored process, and makes it available as a SAS web service - which is what the CLI calls.

If your metadata user differs from the account you are signed in as, use the metadata user in the `path=` and `name=` arguments rather than `&_metauser`.

## When it is missing

The request comes back as a 404, and the CLI says so and prints the code above:

```
The SASjs runner was not found in your user folder at /User Folders/&_metauser/My Folder/sasjs/runner.
Please deploy the SASjs runner by running the code below and try again:
```

Deploying the runner and re-running the command is the whole fix. If the runner exists and the command still fails, the credentials are the next thing to check - [`sasjs auth`](auth.md) for the target.

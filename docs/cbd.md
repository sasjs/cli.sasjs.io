---
layout: article
title: sasjs cbd
description: Compile, build & deploy SAS projects from a local GIT repository to a remote SAS Environment - on Viya, EBI or SASjs Server.
og_image: https://slides.sasjs.io/img/cbd.png
---

# `sasjs cbd`

The `sasjs cbd` command is actually shorthand for three seperate commands, namely:

1. [sasjs compile](/compile)
2. [sasjs build](/build)
3. [sasjs deploy](/deploy)

If you are changing a source file, then it is typically necessary to run all three commands in order to get your project deployed, so `sasjs cbd` is a handy shortcut.

Sometimes though you need to run separately - for example, say you would like to deploy to a production but without the tests.

You could run `sasjs compile` first (which includes the tests), then `rm -rf sasjsbuild/tests`, then `sasjs build` (without tests) and finally `sasjs deploy`.

Or perhaps you have run `sasjs cbd` but the process failed during deployment due to an authorisation issue.  You can simply run `sasjs auth` (to re-authorise) and then `sasjs deploy` (to avoid the recompilation and rebuild).

The following diagram illustrates the end to end `sasjs cbd` process.

![](https://slides.sasjs.io/img/cbd.png)

Notes:

* Source code is organised however you like within the GIT repository
* `sasjs compile` pulls all the dependencies to create self-contained jobs, services & tests
* These live within a `.gitignore`'d folder called `sasjsbuild` in the project repo
* `sasjs build` takes all the compiled artefacts to create a "build pack" (in .sas and .json formats)
* This build pack can now be used to easily deploy the project to the target SAS environment.

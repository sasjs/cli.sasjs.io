---
layout: article
title: Creating SAS Projects using SASjs
description: The `sasjs create` command is used to initialise a SASjs project, either in plain form or using a range of templates.
---

sasjs create
====================

To create a new project, run:  `sasjs create mynewproject`

To install in an _existing_ project, change into that directory and run: `sasjs create` (without arguments).  This will create a `sas` folder inside the directory, and - if a package.json file exists - the @sasjs/core dependency will be added.

An additional option can be specified to create a web app from a template, eg: `sasjs create my-sas-project --template react`.  The `--template` alias can be shortened to `-t` (not to be confused with the `-t` _target_ shortcut used in many other sasjs commands).

The following templates are available:

* [Angular](https://github.com/sasjs/angular-seed-app) - a quickstart for building angular projects
* [React](https://github.com/sasjs/react-seed-app) - a quickstart for React based projects
* [minimal](https://github.com/sasjs/minimal-seed-app) - a basic app using vanilla javascript
* [sasonly](https://github.com/sasjs/template_sasonly) - an app that only contains backend SAS (web) services
* [jobs](https://github.com/sasjs/template_jobs) - an app that only contains backend SAS jobs (including a flow example)


<script id="asciicast-2HEe1ym63B8BNAvISepe1vmT5" src="https://asciinema.org/a/2HEe1ym63B8BNAvISepe1vmT5.js" async></script>



---
layout: article
title: SASjs Artefacts
description: In SASjs, .sas files can be many things!  We define them here.

---

# SASjs Artefacts

SASjs projects are full of files with .sas extensions.  With the exception of tests, the only way to tell them apart is to start from the [sasjs/sasjsconfig.json](/sasjsconfig) file.  Each file type is described below.

## Primary SASjs File Types

### Job

A SASjs Job is a .sas program found in a directory listed in the [jobFolders](https://cli.sasjs.io/sasjsconfig.html#jobConfig_jobFolders) array of the `jobConfig` object.  Where there are `jobFolders` at both target and root level in the sasjsconfig.json file, the `subdirectory/jobname.sas` files at target level will take precedence.

Jobs are not expected to write to `_webout` and so are not compiled with the `%webout()` macro and it's dependencies.  Jobs are always created in a `/jobs/` folder under the target appLoc.

A Job may contain:

* Data Inputs / Outputs - used to generate the [data lineage](/doc/#data-lineage)
* Macros - listed under `<h4> SAS Macros </h4>`
* SAS Includes - listed under `<h4> SAS Includes </h4>`
* Binary Files - under `<h4> Binary Files </h4>`

### Service

A SASjs Service is a .sas program found in a directory listed in the [serviceFolders](https://cli.sasjs.io/sasjsconfig.html#serviceConfig_serviceFolders) array of the `serviceConfig` object.  Where there are `serviceFolders` at both target and root level in the sasjsconfig.json file, the `subdirectory/servicename.sas` files at target level will take precedence.

Services are expected to write to `_webout` and so are compiled along with the `%webout()` macro and dependencies.  Services are always created in a `/services/` folder under the target appLoc.

A Service may contain:

* Service Inputs / Outputs - helpful for the JS developers
* Macros - listed under `<h4> SAS Macros </h4>`
* SAS Includes - listed under `<h4> SAS Includes </h4>`
* Binary Files - under `<h4> Binary Files </h4>`

### Test

A SASjs Test is a .test.sas (or .test.[integer].sas) program found in ANY of the `macroFolders`, `serviceFolders` or `jobFolders` arrays.

Tests are compiled like services (with `%webout()` and dependencies) so that test results can be returned in the output JSON.  Tests are always created in a `/tests/` folder under the target appLoc as follows:

* `$appLoc/tests/macros` -> Macro tests
* `$appLoc/tests/jobs` -> Job tests
* `$appLoc/tests/services` -> Service tests

A test may contain:

* Macros - listed under `<h4> SAS Macros </h4>`
* SAS Includes - listed under `<h4> SAS Includes </h4>`
* Binary Files - under `<h4> Binary Files </h4>`

---
layout: article
title: SASjs Artefacts
description: SASjs Projects are made up of Primary and Secondary Artefacts. These are distinguished according to the settings in the sasjs/sasjsconfig.json file.
og_image: https://cli.sasjs.io/img/artefacts.jpeg
og_title: SASjs Artefacts
---

# SASjs Artefacts

SASjs projects are full of files with .sas extensions.  With the exception of tests, the only way to tell them apart is to start from the [sasjs/sasjsconfig.json](/sasjsconfig) file.  Each file type is described below.

## Primary Artefacts

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

## Secondary Artefacts

### SAS Macros

Macro dependencies can be specified in the following artefacts:

* Jobs
* Services
* Tests
* Macros (extracted recursively)
* initProgram
* termProgram

They are NOT compiled from SAS Includes or Binary Files.

To add a set of macros to a compiled file, just add the following in the header of the source file (artefact):

```
  <h4> SAS Macros </h4>
  @li macro1.sas
  @li macro2.sas
```

During compilation, these macros will be sourced from the following locations (in this order):

* target-level macroFolders array in the sasjsconfig.json file
* root-level macroFolders array in the sasjsconfig.json file
* [SASjs Core](https://core.sasjs.io) under `node_modules/@sasjs/core`
* [SASjs Core](https://core.sasjs.io) under `node_modules/@sasjs/cli/node_modules/@sasjs/core`
* [SASjs Core](https://core.sasjs.io) from the GLOBAL install of the SASjs CLI

As soon as a macro is found, the search stops.  So if an [`mf_nobs.sas`](https://core.sasjs.io/mf__nobs_8sas.html) macro was placed in a directory from the root-level `macroFolders` array, then the same-named definition would NOT be taken from SASjs Core.

If a macro is not found then the compilation will immediately fail.

To avoid continually re-scanning the locations above, macros are added to an internal object (compileTree) as they are found, along with their dependents and source folder location.  After compilation this object is exported to `sasjsbuild/compileTree.json`.

The compiled file does not contain duplicate macros. When compiling each Job / Service / Test, a distinct list of 'top level' macro names are taken from any `initProgram` and `termProgram` definitions, in addition to the `%webout()` dependencies if a Service or Test.

The header of each macro is removed in order to reduce the overall compiled file size.

### SAS Includes

Whilst macro definitions can be easily copy pasted into the beginning of a job, arbitrary SAS code files cannot (as they are executed immediately rather than compiled into a macro catalog).

To enable arbitrary SAS code files (SAS Includes), the compile process will wrap the code in data step `put '(source code);';` statements and assign a user-provided fileref to enable the code to be easily `%inc`'d at the preferred point of execution.

SAS Include dependencies can be specified in the following artefacts:

* Jobs
* Services
* Tests

They are NOT compiled from macros or other SAS Includes.

To add a set of SAS Includes to a compiled file, add the following in the source file (artefact) header:

```
  <h4> SAS Includes </h4>
  @li somefile.sas MYREF
  @li anotherfile.ddl MOJFREF
```

During compilation, the locations below will be searched for files named `somefile.sas` and `anotherfile.ddl`:

* [target-level programFolders array](https://cli.sasjs.io/sasjsconfig.html#targets_items_anyOf_i0_programFolders) in the sasjsconfig.json file
* [root-level programFolders array](https://cli.sasjs.io/sasjsconfig.html#programFolders) in the sasjsconfig.json file

When the file is found, it is wrapped in `put` statements and added to the compiled file, along with a `filename` statement corresponding to the user-provided fileref (eg `MYREF` or `MOJREF`).

To run this code as part of your Job, Service, or Test - just execute as follows:

```sas
%inc MYREF;
%inc MOJREF;
```

### Binary Files

In rare cases you may wish to embed non textual content into your Job / Service / Test - such as Excel, Zip, Images, even video.  This is all possible thanks to a common technique known as Base64 encoding. This allows ANY binary content to be represented as a text string - with the caveat that the encoded file will be at least 33% larger (4 bytes used for every 3 bytes of input).

The compilation process both base64 encodes the source file AND wraps it in `put` statements with a corresponding fileref for developer use.

Binary Files can be specified in the following artefacts:

* Job
* Service
* Test

They are not compiled from Macros or SAS Includes.

To add a set of Binary Files to a compiled file, add the following in the source file (artefact) header:

```
  <h4> Binary Files </h4>
  @li myfile.zip MYZIP
  @li base.xlsx XL
```

During compilation, the locations below will be searched for files named `myfile.zip` and `base.xlsx`:

* [target-level binaryFolders array](https://cli.sasjs.io/sasjsconfig.html#targets_items_anyOf_i0_binaryFolders) in the sasjsconfig.json file
* [root-level programFolders array](https://cli.sasjs.io/sasjsconfig.html#binaryFolders) in the sasjsconfig.json file

When the file is found, it is base64 encoded then wrapped in `put` statements and added to the compiled file, along with a `filename` statement corresponding to the user-provided fileref (eg `MYZIP` or `XL`).

To run this code as part of your Job, Service, or Test - just execute, for example, as follows:

```sas
%mp_unzip(ziploc="%sysfunc(pathname(MYZIP))",outdir=&sasjswork)
```


### initProgram

The `initProgram` attribute is found in the following objects:

* `jobConfig`
* `serviceConfig`
* `testConfig`

Any Macros in the `initProgram` are compiled along with those in the `termProgram`, the Job / Service / Test itself, and the `webout()` macros (if a Service or Test).

The initProgram code itself is inserted without modification into the compiled file right before the main Job / Service / Test code.

Only one initProgram may be used (target level or root level), and it is always applied to ALL instances of the particular type (ie Job / Service / Test).

### termProgram

The `termProgram` attribute is found in the following objects:

* `jobConfig`
* `serviceConfig`
* `testConfig`

Any Macros in the `termProgram` are compiled along with those in the `initProgram`, the Job / Service / Test itself, and the `webout()` macros (if a Service or Test).

The termProgram code itself is inserted without modification into the compiled file right after the main Job / Service / Test code.

Only one termProgram may be used (target level or root level), and it is always applied to ALL instances of the particular type (ie Job / Service / Test).

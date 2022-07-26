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

## Secondary SASjs File Types

### Macros

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

As soon as a macro is found, the search stops.  So if an `mf_nobs.sas` macro was placed in a directory from the root-level `macroFolders` array, then the [same-named definition](https://core.sasjs.io/mf__nobs_8sas.html) would NOT be taken from SASjs Core.

To avoid continually re-scanning the locations above, macros are added to an internal object (compileTree) as they are found, along with their dependents and source folder location.  This object is exported after compilation to the `sasjsbuild/compileTree.json` location.

As mentioned, the compiled file should not contain duplicate macros.  Therefore when compiling each Job / Service / Test, a 'top level' distinct list of macro names is also taken from any `initProgram` and `termProgram` definition, in addition to the `%webout()` dependencies if a Service or Test.

When adding macros, the header is also removed in order to reduce the overall file size.

### SAS Includes

Whilst macro definitions can be easily copy pasted into the beginning of a job, arbitrary SAS code files cannot (as they are executed immediately rather than compiled into a macro catalog).

To enable arbitrary SAS code files (SAS Includes), the compile process will wrap the code in data step `put '(source code);';` statements and assign a designated fileref to enable the code to be easily `%inc`'d at the preferred point of execution.

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




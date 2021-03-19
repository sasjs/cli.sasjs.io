---
layout: article
title: Generate sasjs docs from the commandline
description: Generate documentation for your SAS Data Science projects and SAS backend using the `sasjs doc` commmand and Doxygen
---

# sasjs doc

The `sasjs doc` command enables developers to generate documentation from the Doxygen headers used in SAS programs, macros, services and jobs.

If the doxygen headers in any of the SAS Jobs or Services contain lists of data inputs and/or data outputs in the following format:

```
  <h4> Data Inputs </h4>
  @li libref.tablename1
  @li libref.tablename2

  <h4> Data Outputs </h4>
  @li libref.tablename3

```

Then a data lineage diagram will also be generated (linking data inputs to programs to data ouputs). In the diagram, programs will link to the documented program, and - if [configured](https://cli.sasjs.io/sasjsconfig.html#docConfig) - the tables will link directly to the viewer in [Data Controller](https://datacontroller.io).

Given that the same headers used to generate the documentation are used to compile the Services and Jobs, the documentation will naturally stay up to date - so long as you are using [`sasjs compile`](https://cli.sasjs.io/compile/) to prepare them.

## Prerequisites

Before using this command, you will need to [install](/installation) the SASjs CLI and [Doxygen](https://www.doxygen.nl/download.html#srcbin).

## sasjs doc

Generates HTML docs for all .sas files contained in the programFolders / macroFolders / jobFolders / serviceFolders listed in the sasjsconfig.json file, for all targets. If a specific target is provided, the generated docs will ignore content from the other targets.

`sasjs docs` is an alias for `sasjs doc`.

[![sasjs doc command](https://img.youtube.com/vi/ESNdCtXKRrw/0.jpg)](https://www.youtube.com/watch?v=ESNdCtXKRrw)

### Syntax

```
sasjs doc -t <targetName> --outDirectory <sasFilePath>
```

`sasFilePath` - if this has a leading slash (eg /my-docs) then it must be the full path. If it is a relative path (without a leading slash, eg my-docs) then it will be pre-pended with the project root folder.

Additional arguments may include:

- `--target` (alias `-t`) - If a target is provided, the generated docs will ignore content from the other targets.
  The target can exist either in the local project configuration or in the global `.sasjsrc` file.

### Examples

```
# generates docs in default folder i.e. ./sasjsbuild/docs, using all targets as a source
sasjs doc

# generates docs in default folder i.e. ./sasjsbuild/docs, using a specific target
sasjs doc -t viya

# generates docs in specific folder i.e. ./my-docs, using a particular target
sasjs doc -t viya --outDirectory my-docs
```

## sasjs doc init

For existing SASjs projects (eg those created prior to the implementation of the `sasjs doc` command, or where the doxy folder is otherwise uninitialised) OR to reset doxygen configuration/content, it is possible to initialise the config files using the `sasjs doc init` command.

This will create the 'doxy' folder under 'sasjs', and make it ready to use `sasjs doc`

For new projects using `sasjs create`, `sasjs doc init` is not required - the doxy folder and requisite files are created automatically.

### Syntax

```
sasjs doc init
```

---
layout: article
title: Generate sasjs docs from the commandline
description: The SASjs CLI allows you generate SASjs docs direclty from the command line using Doxygen
---

# sasjs doc

The `sasjs doc` command enables developers to generate SASjs docs from the commandline.

## Prerequisites

Before using this command, you will need to [install](/installation) the SASJS CLI and [Doxygen](https://www.doxygen.nl/download.html#srcbin).

## sasjs doc

Generates docs for all SAS Programs / Macros / Jobs / Services listed in the sasjsconfig.json file by default. If a target is provided, the generated docs will ignore content from the other targets.

The alias to run doc is sasjs docs

### Syntax

```
sasjs doc -t <targetName> --outDirectory <sasFilePath>
```

`sasFilePath` - if this has a leading slash (eg /my-docs) then it must be the full path. If it is a relative path (eg my-docs) then it will be pre-pended with the project root folder.

Additional arguments may include:

- `--target` (alias `-t`) - If a target is provided, the generated docs will ignore content from the other targets.
  The target can exist either in the local project configuration or in the global .sasjsrc file.

### Examples

```
# generates docs in default folder i.e. ./sasjsbuild/docs, using the all targets
sasjs doc

# generates docs in default folder i.e. ./sasjsbuild/docs, using the specific targets
sasjs doc -t viya

# generates docs in provided folder i.e. ./my-docs, using the specific targets
sasjs doc -t viya --outDirectory my-docs
```

## sasjs doc init

For existing sasjs projects(prior to `sasjs doc` command) OR to reset doxygen configuration/content(html files), first need to setup docs.
This will create 'doxy' folder in 'sasjs', and make it ready to use `sasjs doc`

For new projects using `sasjs create`, `sasjs doc init` is not required

### Syntax

```
sasjs doc init
```

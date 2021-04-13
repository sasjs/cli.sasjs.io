---
layout: article
title: Compiling SAS Jobs & Services using SASjs
description: The `sasjs compile` command extracts all the dependencies and input programs for each service / job and includes them in a single file ready for deployment
---

# sasjs compile

## sasjs compile

From the root of the project, run: `sasjs compile`. This will cycle through all the Jobs / Services / Tests in the `jobFolders` / `serviceFolders` / \ `testFolders` arrays in the `sasjsconfig.json` file, extract all of the dependent SAS Macros and SAS Includes, and create one self-contained file per Job (or Service, or Test) inside the `sasjsbuild` folder.  The self-contained file will also include any `initProgram`, `termProgram` and `macroVariables` defined in the relevant config objects.

The `macroFolders` and `programFolders` arrays are searched for SAS Macros and SAS Includes.  If a macro is not found, then then the [macro core](https://core.sasjs.io) library is searched. If the macro is still not found, then the compilation will fail.



![sasjscliflow.png](/img/sasjscompile.png)

If `streamWeb` is `true`, then the `index.html` file in your `webSourcePath` is also scanned and any linked JS / CSS files are also compiled into the `streamWebFolder` folder. The `index.html` becomes a `clickme` service in your `appLoc` SAS folder root.

### Syntax

```
sasjs compile [additional arguments]
```

Additional arguments include:

- `--target` (alias `-t`) - The target to use for obtaining the source folders of programs and macros. If it is not specified, default target will be used, mentioned in `sasjsconfig.json`. The target can exist either in the local project configuration or in the global `.sasjsrc` file. OPTIONAL

## Compile Single File

Instead of compiling an entire project, you can compile a single file.

### Syntax

```
sasjs compile <action> [additional arguments]
```

`action` can be `job` or `service`

Additional arguments include:

- `--source` (alias `-s`) - the path/name.ext of the individual source file to compile (as job or service). MANDATORY
- `--target` (alias `-t`) - The target to use for obtaining the source folders of programs and macros. If it is not specified, the default target will be used, mentioned in `sasjsconfig.json`. The target can exist either in the local project configuration or in the global `.sasjsrc` file. OPTIONAL
- `--output` (alias `-o`) - path where output of the compiled job or service will be saved. OPTIONAL. If not provided, the output will go to the root of the `sasjsbuild` folder if in a project (`sasjsbuild` would be emptied first), else in the current working directory.

## Base64 encoding

If you don't have an `index.html` and you just want to compile arbitrary binary content (such as images, mp3, excel files etc) as base64 services, set the location of the content in `assetPaths`. All files in the specified folder(s) will be turned into web services.

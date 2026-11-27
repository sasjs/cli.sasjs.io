---
layout: article
title: Generate sasjs snippets from the commandline
description: Generate VS Code snippets from macros using `sasjs snippets` command
---

# sasjs snippets
The `sasjs snippets` command generates VS Code snippets from any SAS macros contained in the folders (or subfolders) listed in the `macroFolders` array of the `sasjs/sasjsconfig.json` file. If `macroFolders` is defined at both configuration and target level, the two arrays will be merged in a single array of macro folders. Macros are those that fit the "$(macroname).sas" pattern - tests (such as macroname.test.sas or macroname.test.1.sas) are excluded, as are files with a non ".sas" extension.

Note - snippets are generated from the filename and doxygen header content, **not** the SAS code itself.  

## Syntax

```
sasjs snippets [options]
```

| Option | Alias | Description |
| --- | --- | --- |
| `--outDirectory` | `-o` | Where to write the snippets file. Defaults to `sasjsresults/sasjs-macro-snippets.json`. |
| `--target` | `-t` | The target whose `macroFolders` are read. Defaults to `defaultTarget` in `sasjsconfig.json`. |

The macros come from the folders in `macroFolders`, and each snippet is built from the macro's Doxygen header - see [the header conventions](https://core.sasjs.io/styleguide.html).

## Generate Snippets File

Consider the file name `my/macros/example.sas`:

```sas
/**
  @file
  @brief An example macro
  @details prints an arbitrary message to the log

  @param msg The message to be printed
  @author Allan Bowe

**/

%macro example(msg);

  %let testvar=%sysfunc(ranuni(0));

  data work.example;
    msg=symget('msg');
    putlog msg=;
  run;

%mend example ;
```

Assuming a `sasjs/sasjsconfig.json` file as follows:

```json
{
  "$schema": "https://cli.sasjs.io/sasjsconfig-schema.json",
  "macroFolders": [
    "my/macros"
  ],
  "defaultTarget": "local",
  "targets": [{
    "name": "local",
    "serverUrl": "http://localhost:5000",
    "serverType": "SASJS",
    "appLoc": "/Public/example"
  }]
}
```

Simply run the `sasjs snippets` command within the SASjs project, and the following file will be written to `sasjsresults/sasjs-macro-snippets.json`:

```json
{
  "example": {
    "prefix": "%example",
    "body": "%example($1)",
    "description": [
      "An example macro",
      "\r",
      "Params:",
      "-msg The message to be printed"
    ]
  }
}
```

Notice that the doxygen `@brief` value has been placed at the beginning of the description, and `@param` has been put to the `Params` section. The file name has been used to populate the `prefix` and `body` of the VS Code snippet, and placeholders are also created in the `body`.

## Import Snippets to VS Code

The generated file is a JSON object whose top-level entries are snippet names such as `"example"`. It is not installed automatically. Open `sasjsresults/sasjs-macro-snippets.json` (or the file in your chosen output directory) and use one of the following methods.

### User-wide SAS snippets

1. In VS Code, open the Command Palette (`F1`) and select **Snippets: Configure Snippets**.
2. Select the `sas` language to open `sas.json`.
3. Copy the generated snippet entries **inside** the outer braces into the existing object in `sas.json`. Keep any existing entries, add commas between entries, and resolve duplicate snippet names by renaming or replacing the entry you choose. Do not paste a second outer object into the existing one.
4. Save `sas.json`. These snippets apply to SAS files in all projects for this user.

### Project-specific SAS snippets

1. Open the project folder in VS Code. Run **Snippets: Configure Snippets** and select **New Snippets file for '<project>'**, or create a `.vscode/<name>.code-snippets` file in the project root.
2. Copy the generated snippet entries into that file's outer object, preserving existing entries and resolving duplicate names as above. For every generated entry, add `"scope": "sas"` alongside `prefix`, `body`, and `description`. For example:

    ```json
    {
      "example": {
        "scope": "sas",
        "prefix": "%example",
        "body": "%example($1)",
        "description": ["An example macro"]
      }
    }
    ```

3. Save the file. Without `scope`, a project snippet is available for all languages. The generator does not add this scope, and writing its output directly over an existing snippets file can overwrite your snippets.

In a file whose VS Code language mode is `sas` (install a SAS language extension if needed), type the prefix (for example `%example`) and select the suggestion, or run **Insert Snippet** from the Command Palette. See the [VS Code snippets documentation](https://code.visualstudio.com/docs/editing/userdefinedsnippets) for details.

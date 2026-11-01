---
layout: article
title: Building database scripts with sasjs db
description: The sasjs db command concatenates the DDL and SAS files under sasjs/db into one program per database, in the build folder.
---

# sasjs db

`sasjs db` gathers the database scripts of a project into one program per database. Each sub folder of `sasjs/db` is treated as a database, and its files are concatenated into `sasjsbuild/db/<database>.<extension>`.

The command exists so that a database build can be run as a single SAS program - the same shape as the compiled jobs and services - rather than as a folder of loose scripts.

## Syntax

```
sasjs db [options]
```

`sasjs build-DB` and `sasjs build-db` are accepted as alternative names for the same command.

| Option | Alias | Description |
| --- | --- | --- |
| `--target` | `-t` | The target whose `sasjsBuildFolder` the output goes into. Defaults to the `defaultTarget` in `sasjsconfig.json`. |

The command reads `sasjs/db` and writes below the build folder of the resolved target.

!!! warning
    CLI 6.4.7 and earlier fail before writing anything, with `Cannot read properties of undefined (reading 'buildSourceDbFolder')` - the command never resolved a target, so the build folders were unset (sasjs/cli#1524, fixed in sasjs/cli#1525, first released in 6.4.8). Those versions also have no `--target` option.

## Input

Every immediate sub folder of `sasjs/db` is a database. Only two file extensions are read: `.ddl` and `.sas`. Other files in the folder are ignored.

```
sasjs/db/
├── sales.ini          <- optional, prefixed to the sales DDL
├── sales/
│   ├── 01-tables.ddl
│   ├── 02-views.ddl
│   └── 03-load.sas
└── warehouse/
    └── 01-tables.ddl
```

## Output

| Path | Contains |
| --- | --- |
| `sasjsbuild/db/sales.ddl` | The contents of `sales.ini` (when present), then every `.ddl` file of `sales/`, in folder order |
| `sasjsbuild/db/sales.sas` | Every `.sas` file of `sales/` |
| `sasjsbuild/db/warehouse.ddl` | Every `.ddl` file of `warehouse/` |

Notes:

- the `.ini` file is placed beside the database folder and shares its name - `sasjs/db/<database>.ini` - and is prepended to the `.ddl` output only
- the `db` folder in the build destination is recreated on every run, so a deleted source file does not linger in an old build
- the extension is the last segment of the file name, so `01-tables.ddl` counts as `.ddl`

The result is plain SAS code, so it can be executed like any other program - `%include` it from a deployment script, or run it with [`sasjs run`](run.md).

---
layout: article
title: Managing SAS Viya Folders with SASjs
description: Documentation on how to use the SASjs CLI to create, delete, and move SAS Viya Folders
og_image: https://cli.sasjs.io/img/sasjs-cli-folder.png
---

sasjs folder
====================

The `sasjs folder` command allows users to manage logical SAS Viya Folders (the kind that appear in SAS Drive).  These are not to be confused with physical (filesystem) directories.  The Viya Folder tree is actually stored in a Postgres Database.

It is useful to be able to create and delete folders as part of CI/CD, for instance when tearing down part of an environment in order to rebuild it.


## Prerequisites
Before using this command, you will need to install the SASJS CLI and [add a deployment target](/add).

## Syntax

```
sasjs folder <action> [additional arguments]
```

Additional arguments include:

* `--target` (alias `-t`) - the target environment in which to create the SAS Folder.  If not specified, the first target will be used instead. The target can exist either in the local project configuration or in the global .sasjsrc file.

## sasjs folder list

Used to list first level children folders of given folder.

<!-- Needs recorded video -->
<script id="asciicast-385938" src="https://asciinema.org/a/385938.js" async></script>

### Syntax

> `sasjs folder list <folderpath> -t target`

### Usage

```
sasjs folder list /Public -t myTarget
```

## sasjs folder create

Used to create a new SAS folder. Will fail if the folder already exists. If the `-f` flag is used, a new folder will be forcibly created (ie, if there is an existing one, it will be deleted).

<script id="asciicast-WbTaf3ns77RUL6iCSoHzAULN0" src="https://asciinema.org/a/WbTaf3ns77RUL6iCSoHzAULN0.js" async></script>

### Syntax

> `sasjs folder create <folderpath> -t target -f`

### Usage

```
sasjs folder create /Public/new/folder -t myTarget
```

## sasjs folder delete

Used to delete an existing SAS Folder.  To avoid the overhead with recursively deleting folders and content, the `delete` command actually moves the requisite folder into the Recycle Bin. This makes it very fast, as well as reversable.

<script id="asciicast-6ex7kftlSRbmjeXxpjV47qEbf" src="https://asciinema.org/a/6ex7kftlSRbmjeXxpjV47qEbf.js" async></script>

### Syntax

> `sasjs folder delete <folderpath> -t target`

### Usage

```
sasjs folder delete /Public/new/folder -t myTarget
```


## sasjs folder move

Moves an existing folder to a new location. It behaves similarly as Unix `mv` command.
If the same locations are provided, but the name is different on the `targetpath` then it will rename the folder.
If different locations are provided, first it will check if last path section string in the `targetpath` exists as a folder, it will move it inside, and if it does not exist, it will move it inside of the first up level folder and the last section of `targetpath` will be used for the renaming of moving folder.

<script id="asciicast-oZB91eGpw7WvdFp3VYxetYj4k" src="https://asciinema.org/a/oZB91eGpw7WvdFp3VYxetYj4k.js" async></script>

### Syntax

> `sasjs folder move <folderpath> <targetpath>`

### Usage

It will move `folder` to `/Public`
```
sasjs folder move /Public/old/folder /Public -t myTarget
```

It will only rename `folder` to `folder2` leaving it in same directory
```
sasjs folder move /Public/old/folder /Public/old/folder2 -t myTarget
```

It will move `folder` to `/Public` and will rename it to `folder2`  
The reason behind it is that `/Public/folder2` does not exists, in that case it moves and renames the folder.
```
sasjs folder move /Public/old/folder /Public/folder2 -t myTarget
```
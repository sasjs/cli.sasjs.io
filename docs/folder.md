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

* `--target` (alias `-t`) - the target environment in which to create the SAS Folder.  If not specified, the first target will be used instead.


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

Moves an existing folder to a new parent location.

<script id="asciicast-oZB91eGpw7WvdFp3VYxetYj4k" src="https://asciinema.org/a/oZB91eGpw7WvdFp3VYxetYj4k.js" async></script>

### Syntax

> `sasjs folder move <folderpath> <newparentpath>`

### Usage

```
sasjs folder move /Public/old/folder /Public
```

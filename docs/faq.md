---
layout: article
title: Frequently Asked SASjs Questions
description: Common questions and answers when working with the SASjs Command Line Interface
---

FAQ
====================

## What is the difference between local and global targets?

A target is a set of attributes (eg server URL, SAS Folder location) to which a project will be deployed, or some code executed.  When running locally, inside a project (eg a GIT repository) these attributes are taken from the `sasjsconfig.json` file, whilst any authorisation attributes are retrieved from the `.env.$(targetname)` file (where they are typically `.gitignore`'d for security).

When running outside of a project, the attributes are taken from the global `~/.sasjsrc` file in the user home directory.  In this case, the authorisation details are also stored in the same file (authConfig).

The `sasjs` command will "discover" if it is inside a local project by the presence of a `sasjs/sasjsconfig.json` file in the current, or any of the parent directories.  If not found, then the `~/.sasjsrc` file will be searched instead.

It's worth noting that there are typically MORE attributes defind in a _local_ target, because this is where an application is normally configured in detail for deployment.  The _global_ target is more for general use, such as running arbitrary jobs or SAS code.

A diagram of the rules for determining whether a local or remote target is used is available below.

<!-- source: https://excalidraw.com/#room=0e0163e79c486da603dd,OrjYfbOmt6OTc64ND7Qf6Q -->

![SASJS target](/img/targetBehaviour.svg)
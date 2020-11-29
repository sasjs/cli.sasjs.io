---
layout: article
title: Frequently Asked SASjs Questions
description: Common questions and answers when working with the SASjs Command Line Interface
---

FAQ
====================

## What is the difference between local and global targets?

A target is a set of attributes definining the remote SAS server.  When running locally, inside a project (eg a GIT repository) these attributes are saved in the `sasjsconfig.json` file, whilst any authorisation attributes are saved in a `.env.$(targetname)` file (where they can be `.gitignore`'d for security).

When running outside of a project, the attributes are taken from the `~/.sasjsrc` file in the home directory.  In this case, the authorisation details are also stored in the same file.

The `sasjs` command will "discover" if it is inside a local project by the presence of a `sasjs/sasjsconfig.json` file in the current, or any of the parent directories.  If not found, then the `~/.sasjsrc` file will be searched instead.

It's worth noting that there are typically MORE attributes defind in a _local_ target, because this is typically where an application would be configured in detail for deployment.  The _global_ target is typically for general use, such as running arbitrary jobs or SAS code.
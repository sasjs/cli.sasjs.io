---
layout: article
title: SASjs Configuration
description: How to structure the sasjsconfig.json file and what all the attributes actually do
---

# SASjs Configuration

The SASjs Config file provides the settings for your SASjs project. It is divided between root-level (applies to all targets) and target level (specific to a deployment target) settings. Target level settings always override root settings. The SASjs config file can existing within a project (local file) or in your home directory (global). When running the SASjs CLI, a search is made within the current directory, then all parent directories, for a `./sasjs/sasjsconfig.json` file. If none is found, then the global config is used by default. If the local is found, but the specified target is not found within it, then the global target will be searched then also.

The benefit of a global sasjsconfig is that you can use the settings anywhere on your filesystem (with that user account). The benefit of a local config file is that you can share the settings with other developers on your project.

To view the below in full screen, click [here](/sasjsconfig.html).

<iframe src="/sasjsconfig.html" width="100%" height="1000" style="border:none;">
</iframe>

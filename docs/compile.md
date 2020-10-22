---
layout: article
title: Compiling SAS Jobs & Services using SASjs
description: The `sasjs compile` command extracts all the dependencies and input programs for each service / job and includes them in a single file ready for deployment
---

sasjs compile
====================

From the root of the project, run:  `sasjs compile`.  This will take all of the macros in the `services` folder and create equivalents in the `sasbuild` folder.  Each service will contain all of the dependent macros as listed under `dependencies` in the header, as well as the `serviceinit.sas` and `serviceterm.sas` files.
![sasjscliflow.png](/img/sasjscompile.png)

If `streamWeb` is `true`, then the `index.html` file in your `webSourcePath` is scanned and any linked JS / CSS files are also compiled into the `streamWebFolder` folder.  The `index.html` becomes a `clickme` service in your `appLoc` SAS folder root.

### Base64 encoding
If you don't have an `index.html` and you just want to compile arbitrary binary content (such as images, mp3, excel files etc) as base64 services, set the location of the content in `assetPaths`.  All files in the specified folder(s) will be turned into web services.

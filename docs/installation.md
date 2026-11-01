---
layout: article
title: Installation
description: Install the SASjs CLI with npm, on any OS, and check which version you are running.
---

# Installation

The SASjs CLI is an npm package, so Node comes first. Both take a few minutes.

## 1. Node

=== "Windows"

    Download the current LTS release from [nodejs.org](https://nodejs.org/en/) and run the installer. Leave the
    "tools for native modules" checkbox clear - nothing here needs a compiler.

    If you work across several Node versions and have admin rights, [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)
    is the tidier option.

=== "macOS / Linux"

    [nvm](https://github.com/nvm-sh/nvm) installs Node without root:

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
    source ~/.bashrc
    nvm install --lts
    ```

Node 22 or newer is supported.

## 2. The CLI

```bash
npm i -g @sasjs/cli
```

Then check it:

```bash
sasjs --version
```

```
You are using SASjs CLI v6.5.0
```

## Upgrades

```bash
npm i -g @sasjs/cli@latest
```

Use the npm that ships with your Node - Node 22 bundles npm 10. If npm has been pinned to an old release, `npm i -g npm@latest` first: global upgrades on npm 6 are unreliable ([npm/cli#1884](https://github.com/npm/cli/issues/1884)) and npm 6 has been end-of-life since 2022.

If a command does not behave as this site describes, run `sasjs version` first: an older CLI is the usual reason.

# Installation

The SASjs CLI is available on [Node Package Manager](https://www.npmjs.com/). To make NPM available to your terminal, it is first necessary to install NodeJS. The NodeJS installation will vary depending on your OS, as detailed below.

## 1. NodeJS

### Windows

If you only care about using the SASjs CLI then simply download NodeJS directly from the homepage:  [https://nodejs.org/en](https://nodejs.org/en/).  We recommend you do NOT install chocolatey (leave the checkbox unchecked), unless you have a specific need for it.

If you're a power user looking to play with different versions of NodeJS **and** you have admin rights on your machine, then NVM-Windows would be the better choice - available here: [https://github.com/coreybutler/nvm-windows#installation--upgrades](https://github.com/coreybutler/nvm-windows#installation--upgrades)

### Mac / Linux
We recommend using [NVM](https://github.com/nvm-sh/nvm) instead of [Node](https://nodejs.org/en/) directly, as this does not require root permissions.

```Bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
source ~/.bashrc
nvm install --lts
```

## 2. SASjs CLI
The CLI can now be installed using Node Package Manager (npm) as follows:

```Bash
npm i -g @sasjs/cli
```

## Upgrades

Simply run `npm i -g @sasjs/cli@latest` to get the latest package.

Note - this approach is [not reliable](https://github.com/npm/cli/issues/1884) if you are using NPM v6.  We recommend that you use the latest version of NPM, for security reasons.  To update NPM, run:  `npm i -g npm@latest`


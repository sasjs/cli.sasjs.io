# Installation

The runtime environment for the CLI is Node. We recommend using [NVM](https://github.com/nvm-sh/nvm) instead of [Node](https://nodejs.org/en/) directly, as this does not require root permissions.

```Bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
source ~/.bashrc
nvm install -lts
```

The CLI can now be installed using Node Package Manager (npm) as follows:

```Bash
npm i -g @sasjs/cli
```

### Upgrades

Simply run `npm i -g @sasjs/cli@latest` to get the latest package.

Note - this approach is [not reliable](https://github.com/npm/cli/issues/1884) if you are using NPM v6.  We recommend that you use the latest version of NPM, for security reasons.  To update NPM, run:  `npm i -g npm@latest`


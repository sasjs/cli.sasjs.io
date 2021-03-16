# Installation

The runtime environment for the CLI is Node. We recommend using [NVM](https://github.com/nvm-sh/nvm) instead of [Node](https://nodejs.org/en/) directly, as this does not require root permissions.

```Bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
source ~/.bashrc
nvm install node
```

The CLI can now be installed using Node Package Manager (npm) as follows:

```Bash
npm i -g @sasjs/cli
```

### Upgrades

Due to a [bug in NPM](https://github.com/npm/cli/issues/1884), the following approaches for upgrades are not reliable:

- `npm i -g @sasjs/cli@latest` (`sasjs v` will show latest version, but code isn't actually updated)
- `npm update @sasjs/cli` (works but the first time you use the `sasjs` command there will be an error)

These issues are resolved in NPM 7 (`npm i -g npm@next-7`). If you prefer to use the current GA version, the workaround is to explicitly delete the SASjs files before installing, eg:

```Bash
cd /Users/allan/.nvm/versions/node/v13.9.0/lib/node_modules
rm -rf sasjs-cli
npm i -g @sasjs/cli
```

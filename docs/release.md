---
layout: article
title: Releasing with @sasjs/release
description: Tag, release and publish a project from its conventional commits, on GitHub, Gitea or GitLab, without a release toolchain.
---

# Releasing with @sasjs/release

[@sasjs/release](https://github.com/sasjs/release) turns the conventional commits merged since the last tag into a version, a tag, a release and, where there is one, an npm publish. It is one command with no dependencies, and it runs anywhere: a GitHub or GitLab pipeline, a Gitea runner, or a laptop.

The SASjs CLI, and the repositories that back this site, are released with it.

```bash
npx @sasjs/release --dry-run    # what it would tag, and the notes it would write
```

## Why not a release toolchain

A release toolchain arrives with a few hundred packages, a plugin per job, and advisories that no one can fix because the affected code is bundled inside the tool. It also usually needs write access to the default branch, to commit the version and the changelog it just generated.

`@sasjs/release` takes the other side of both trades. The version is the git tag, so nothing is committed and no branch is written. The release notes are generated from the commits on every run, so there is no file to keep in step with them.

## How the version is decided

| Commit | Release |
| --- | --- |
| `feat:` | minor |
| `fix:`, `perf:`, `refactor:` | patch |
| `!` after the type, or a `BREAKING CHANGE:` footer | major - minor while the major is still 0 |
| anything else (`docs:`, `chore:`, `ci:`, `test:`) | nothing |

A push whose commits are all in the last row releases nothing, and the command exits 0 saying so. That is the normal outcome for a documentation change, not a failure.

For a squash merge the pull request title drives the decision, so keep titles conventional.

`--level patch|minor|major` overrides the classification when a history is not conventionally formatted, and `--prerelease beta` cuts `1.8.0-beta.1`, continuing an existing beta rather than starting a second one.

## Running it

```bash
# say what it would do, writing nothing
npx @sasjs/release --dry-run

# cut the tag and the release; the host creates the tag at this commit
npx @sasjs/release --host github --release

# cut the tag first, when a later job has to build from it
npx @sasjs/release --tag --push-tag
```

The result is printed as `key=value` lines - `released`, `version`, `tag`, `level` - so a pipeline can feed them to whatever variable protocol it has.

A run that fails part-way is finished by re-running it: an existing tag, an existing release and an already-attached asset are all reused rather than refused. This is the case a release commit cannot recover from, and the reason a half-finished release usually needs a hand repair.

## In a pipeline

Two workflows, because the two jobs need different permissions and neither should hold the other's:

- **release** creates the tag and the release. It holds `contents: write` and no git credential: the tag is created by the release API, so nothing is pushed.
- **publish** runs `npm publish`. It holds `id-token: write` and `contents: read`, and no token at all - the OIDC identity is the credential.

Two constraints are worth knowing before copying the pattern into a repository:

1. **The publishing workflow's filename cannot change.** npm's trusted publisher is registered against the workflow that runs `npm publish`, because the registry validates that workflow's identity rather than the one that triggered it.
2. **The publish is chained off the release workflow with `workflow_run`, not `release: published`.** A release created with the pipeline's own `GITHUB_TOKEN` produces no events - GitHub suppresses them to prevent recursion - so a `release: published` trigger would never fire, and would fail silently.

The tool is pinned as a `devDependency` so the lockfile pins its integrity as well as its version, and a bump is a reviewable diff.

## Other hosts

| Host | Command |
| --- | --- |
| GitHub | `--host github --release`, token in `GH_TOKEN` |
| Gitea | `--host gitea --api-url https://host/api/v1 --release`, token in `GITEA_TOKEN` |
| GitLab | `--host gitlab --release`, token in `PRIVATE-TOKEN` or `JOB-TOKEN` |
| anywhere else | `--host none` (the default) does the git work and no host calls |

On GitLab a release carries links rather than uploaded files, so an artifact is attached with `--asset-link "app.zip=$URL"` - usually pointing at the job artifact of the build that just ran. `$CI_JOB_TOKEN` works, so a client project needs no personal token.

On Gitea, a tag created by the Actions user does not fire `on: push: tags`, so a workflow that should react to a release - publishing docs, deploying a demo - has to be dispatched from the same job.

## The version in package.json

It stays at `0.0.0`. The tag is the record, and the publish job stamps the tag's version into the workspace before packing, so the tarball and the registry are correct while the repository is not claiming anything. `prepublishOnly` refuses to publish a `0.0.0` version, so a hand-run publish cannot put the placeholder on the registry.

Do not read that field to learn what is published: `npm view <package> version` and the git tags are the answers.

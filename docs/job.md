---
layout: article
title: Executing SAS jobs with sasjs job
description: The sasjs job execute command runs a job that is deployed on the SAS server, and can wait for it, save the log and output, and stream the log as it runs.
---

# sasjs job

`sasjs job execute` runs a job that already exists on the SAS server - a Viya job, a SAS 9 job, or a job on SASjs Server - and brings back what it produced.

## Prerequisites

- the SASjs CLI [installed](installation.md)
- a [target](add.md), with credentials ([`sasjs auth`](auth.md))
- the job already deployed, by [`sasjs deploy`](deploy.md) or otherwise

## Syntax

```
sasjs job execute <jobPath> [options]
```

`exec` is accepted in place of `execute`.

`jobPath` is the location of the job on the server. A path that begins with `/` is used as it is; a relative path is prefixed with the target's `appLoc`.

## Options

| Option | Alias | Server types | Description |
| --- | --- | --- | --- |
| `--target` | `-t` | all | The target to execute against. Defaults to `defaultTarget` in `sasjsconfig.json`. |
| `--log` | `-l` | all | Path to save the job log to. On Viya, supplying it also makes the CLI wait for the job. |
| `--output` | `-o` | all | Path to save the job's output to. |
| `--source` | `-s` | all | Path to a JSON file of job variables - `{"macroVars": {"var": "value"}}`. |
| `--wait` | `-w` | Viya | Wait for the job to finish before returning. |
| `--statusFile` | | Viya | Save the job status to this file as it progresses. With no path, the status is printed instead. |
| `--streamLog` | | Viya | Write the log to the `--log` path while the job runs, rather than at the end. Useful for long jobs. |
| `--ignoreWarnings` | `-i` | Viya | Return success when the job finishes in the warning state, rather than a failure. |
| `--returnStatusOnly` | `-r` | Viya | **Deprecated** - prints a warning and is ignored. |
| `--verbose` | `-v` | all | Log a summary of every HTTP request and response. `-v bleached` drops the colour. |

SAS 9 and SASjs Server execute the job in a single request, so they have nothing to wait for and no status to poll: `--wait`, `--statusFile`, `--streamLog` and `--ignoreWarnings` are Viya only.

## Examples

```bash
# run a job, keeping the log and the output
sasjs job execute /Public/folder/someJob -l ./jobLog.log -o ./jobOutput.json -t myTarget
```

```bash
# pass macro variables into the job
echo '{"macroVars":{"myMacVar":"my macro value!","macvar2":"another value"}}' > sourcevars.json
sasjs job execute /Public/folder/someJob -l ./jobLog.log -s ./sourcevars.json
```

```bash
# follow a long running job: wait, streaming the log, with status written out
sasjs job execute /Public/folder/someJob -w --streamLog -l ./jobLog.log --statusFile ./jobStatus.json
```

## What comes back

The log and the output are written where `--log` and `--output` point; with neither, nothing is fetched from the server.

The command exits with a non-zero code when the job fails, so it can gate a pipeline step:

```bash
sasjs job execute /Public/folder/someJob -w -l ./jobLog.log || echo "job failed"
```

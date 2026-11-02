---
layout: article
title: sasjs logcheck
og_title: Check the SAS log after a run, and fail a pipeline on what SAS printed
description: Read a SAS log the way a reviewer would - ERRORs, WARNINGs and the notes that flag a problem - and fail a pipeline when the log is not clean, with suppressions by message code.
---

# sasjs logcheck

`sasjs logcheck` reads SAS logs and reports what SAS itself printed: `ERROR`, `WARNING`, and the notes that flag a problem - a variable never set, a division by zero, values silently converted, an input row that failed.

It is the post-execution counterpart to [`sasjs lint`](/lint). Lint reads your source before anything runs; logcheck reads what SAS said back after it ran.

The reason to have it is a run that reported success and was not. A program can print `ERROR 22-322`, leave `&syscc` at 0, and return to a green pipeline with a red log - the log is the only place that failure exists.

## Prerequisites

Before using this command, simply [install](/installation) the SASjs CLI.

No target, no login and no `sasjs/sasjsconfig.json` are required. A log from Enterprise Guide, from a server you cannot reach today, or from a run somebody sent you, checks the same way. Configuration is only needed to change the failure policy or to record suppressions - see [Configuration](#configuration).

## Syntax

```
sasjs logcheck [paths..] [options]
```

Each `path` is a file or a folder; folders are walked. With no path, the results folder of the current project is checked - `sasjsresults` by default, which is where `run`, `job execute` and `test` leave their logs. Files are de-duplicated, sorted, and `node_modules` and `.git` are not walked.

`sasjs lc` is an alias.

## Options

| Option | What it does |
| --- | --- |
| `--fail-on <policy>` | The lowest severity that fails the run: `error` (default), `warning`, `note` or `never`. |
| `--max-warnings <n>` | A budget for the whole run. More warnings than this fails the run whatever the policy says - including under `never`, because a budget is a specific instruction. |
| `--ignore-code <code>` | Suppress one SAS message code, eg `49-169`. Repeatable, and added to the codes in the config rather than replacing them. |
| `--ignore-path <pattern>` | Leave a log out of the check: a path segment (`sasjsresults/legacy`) or a glob (`**/build*.log`). Repeatable. |
| `--format <format>` | `human` (default), `json`, or `annotations` for CI. |
| `--json` | Shorthand for `--format json`. |
| `-v, --verbose` | List every file that was skipped, and why. |

## What counts as an issue

- An `ERROR` or a `WARNING` line, with SAS's own message code kept where there is one (`22-322`), and the lines SAS wrapped folded back into a single message.
- The notes a reviewer would want to see, even though SAS called them notes: `Variable flag is uninitialized`, `Division by zero`, `Missing values were generated`, `Invalid data`, `File ... does not exist`, `W.DATA was not found`, and the rest of a deliberately short list. Every other note is ignored - a log holds thousands of them, and reporting them all is the same as reporting nothing.

Two details that matter when you point at a line:

- A file that is not a SAS log is skipped, not reported clean. A Python traceback and a shell build log both begin lines with `ERROR:`, so the banner SAS prints about itself is what decides.
- An ODS HTML log is read too. The markup is stripped and the reported line and column are those of the log file, so an issue can be found in the editor you have it open in.

## Failure policy and exit codes

| Exit code | Meaning |
| --- | --- |
| `0` | Nothing at or above the policy. |
| `5` | A log broke the policy. This is `LogCheckError`, and it is deliberately different from `3`, which `sasjs lint` returns, so a pipeline can tell a code-quality failure from a run SAS complained about. |
| `2` | The check could not run - an unreadable folder, or a `logCheck` block that could not be understood. |

The default policy is `error` on purpose. Notable notes are what legacy code produces in bulk, and a gate that is red on its first run gets switched off. Report them first, read the count, then raise the policy.

A folder the process cannot read fails the run rather than passing quietly: the answer to "is this log clean" is then unknown, and unknown is not a pass.

## Configuration

The policy lives in a `logCheck` block in `sasjs/sasjsconfig.json`:

```json
{
  "logCheck": {
    "failOn": "error",
    "maxWarnings": 20,
    "ignoreCodes": ["49-169"],
    "ignorePaths": ["sasjsresults/legacy", "**/build*.log"],
    "folder": "sasjsresults",
    "autoCheck": false
  }
}
```

| Key | Default | Meaning |
| --- | --- | --- |
| `failOn` | `error` | The lowest severity that fails the run. |
| `maxWarnings` | none | A budget for the whole run. |
| `ignoreCodes` | `[]` | SAS message codes to suppress, eg `49-169`. |
| `ignorePaths` | `[]` | Path segments or globs to leave out. |
| `folder` | `sasjsresults` | What to check when no path is given. `sasjsResultsFolder` is followed when a project sets one. |
| `autoCheck` | `false` | Whether the commands that receive a log fail on it - see [Checking a log automatically](#checking-a-log-automatically). |

A value that cannot be understood is refused with a message naming the key, rather than quietly falling back to the default: a typo that turns a gate off is the one failure a gate must not have.

Suppressions are keyed on the SAS message code because that is the part SAS keeps stable - the text of a note carries values from the data, while `49-169` means the same thing every run.

## Output

The default is a human report: a table per file, the issues themselves, then the verdict.

```
SASjs logcheck  sasjsresults

FILE                       ERRORS  WARNINGS  NOTES  STATUS
-------------------------  ------  --------  -----  ------
sasjsresults/run-job.log   0       1         3      pass
sasjsresults/load.log      2       0         1      FAIL

  sasjsresults/load.log
    LINE:COL  SEVERITY  CODE  MESSAGE
    --------  --------  ----  -------------------------------------------
    99:1      error     -     File WORK.ORDERS.DATA does not exist.
    108:1     error     -     Errors printed on page 1.

  2 errors, 1 warning, 4 notes in 2 logs
  Logcheck failed: 2 errors  (fail-on: error)
```

`--format json` prints the same summary as a document - `summary`, `logs[].issues[]`, `skipped` and `unreadable` - with line and column counted from one, as an editor counts them.

`--format annotations` prints [GitHub Actions workflow commands](https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions), so every issue is underlined in the run log at its own line:

```
::error file=sasjsresults/load.log,line=99,col=1,endLine=99,endColumn=53,title=SAS ERROR::File WORK.ORDERS.DATA does not exist.
```

## Checking a log automatically

The commands that execute SAS and receive its log - `run`, `request`, `job execute`, `flow execute` and the `fs` sub-commands - report what the log contains, and fail on it when the policy says so.

The verdict is opt-in, because those commands' exit codes are already load-bearing in pipelines and a job that prints a notable note has not failed. Turn it on per run, or per project:

```
sasjs run sasjs/load.sas -t viya --logcheck
```

```json
{ "logCheck": { "autoCheck": true } }
```

Reporting is silent for a clean log, so a green run reads exactly as it did before. A command that already failed is not checked: its log is truncated at the failure and the error path has already reported it. `sasjs test` keeps its own verdict - a passing suite is not turned red by a note SAS printed on the way.

## In a pipeline

Fail the build on a log that is not clean:

```yaml
- name: Run the load
  run: sasjs run sasjs/load.sas -t viya --logcheck
```

Check logs that a previous step, or another machine, left behind - and annotate the workflow log with each issue:

```yaml
- name: Check the logs
  run: sasjs logcheck --format annotations
```

Suppress what has been accepted rather than lowering the policy for everything - a code in the config, a path if a whole folder is out of scope:

```json
{ "logCheck": { "ignoreCodes": ["49-169"], "ignorePaths": ["sasjsresults/legacy"] } }
```

## logcheck or lint?

| | `sasjs lint` | `sasjs logcheck` |
| --- | --- | --- |
| Reads | your source | the log SAS produced |
| When | before anything executes | after a run, or on a log from anywhere |
| Depends on | the code alone | the code, and the data it ran against |
| Fixes | yes, for the rules that support it | no - the fix belongs in the source, so in lint |
| Exit code | `3` | `5` |

## Further Resources

* Source: [https://github.com/sasjs/cli](https://github.com/sasjs/cli)
* Issues and requests: [https://github.com/sasjs/cli/issues](https://github.com/sasjs/cli/issues)
* Linting the source: [sasjs lint](/lint)

<!-- cli-docs-ignore: --logcheck --no-logcheck --target (this page describes the check that other commands opt into, and quotes one of them in an example) -->

---
layout: article
title: A scheduler for executing SAS jobs
description: The SASjs CLI allows SAS jobs to be organised into flows, and executed in parallel or sequentially.  The schedule stops in case of warning or error.
---

# sasjs flow

The `sasjs flow` command allows SAS Administrators to configure a batch schedule using a JSON file, to trigger the batch using a command line, and to capture the results of the flow in a CSV file.

Jobs can be executed in parallel, or in sequence following the successful completion of the previous job(s).

## Prerequisites

Before using this command, you will need to:

- [install](/installation) the SASjs CLI
- [add](/add) a deployment target.
- Create a flow source (JSON) file.

## Syntax

```
sasjs flow <action> [additional arguments]
```

Additional arguments may include:

| Option | Alias | Description |
| --- | --- | --- |
| `--source` | `-s` | Path to the flow definition - a JSON file listing the jobs. Required. |
| `--logFolder` | `-l` | Folder in which the job logs are saved. |
| `--csvFile` | `-c` | Path of the CSV that receives each job's status. It is replaced if the command runs again. |
| `--streamLog` | | Write each job's log to `--logFolder` while it runs, rather than at the end. Useful for a long flow. |
| `--target` | `-t` | The target to run the flow against. Defaults to `defaultTarget` in `sasjsconfig.json`, then the global `.sasjsrc`. |

## Source JSON file

This is the file where the pattern of the flow is configured. A very simple flow definition might look like this:

```
{
  "name": "simpleFlow",
  "flows": {
    "flow01": {
      "jobs": [
        {
          "location": "/Projects/subfolder/someJob1"
        },{
          "location": "/Projects/subfolder/someJob2"
        }
      ],
      "predecessors": []
    }
  }
}
```

The above is named "simpleFlow" with one flow named "flow01" and two jobs - which will execute in parallel (as they are in the same flow).

A more complicated one would look like this:

```
{
  "name": "myAmazingFlow",
  "flows": {
    "ourveryfirstflow": {
      "jobs": [
        {
          "location": "/Projects/job1"
        },
        {
          "location": "/Projects/job2"
        },
        {
          "location": "/Projects/job3"
        }
      ],
      "predecessors": []
    },
    "secondflow": {
      "jobs": [
        {
          "location": "/Projects/job11"
        }
      ],
      "predecessors": [
        "firstflow"
      ]
    },
    "anotherflow": {
      "jobs": [
        {
          "location": "/Public/job15"
        }
      ],
      "predecessors": [
        "ourveryfirstflow",
        "secondflow"
      ]
    }
  },
    "yetanotherflow": {
      "jobs": [
        {
          "location": "/Public/job115"
        }
      ],
      "predecessors": []
    }
  }
}
```

The above contains a flow definition with 4 flows:

1. `"ourveryfirstflow"` - triggers 3 jobs at once, runs immediately as no predecessors
2. `"yetanotherflow"` - triggers 1 job, runs immediately as no predecesors
3. `"secondflow"` - triggers as soon as firstflow is complete and ONLY if the jobs all finish with SUCCESS status
4. `"anotherflow"` - triggers once firstflow and secondflow are complete, but ONLY if all finish with SUCCESS

## Which servers

A flow runs on SAS Viya and on SASjs Server. Both are dispatched and polled the same way - the job is started, its state is followed until it finishes, and its log is fetched when it does - so a flow definition and a command line are the same on either.

One thing differs: how a job's `location` is resolved.

| `location` | Resolved as |
| --- | --- |
| `jobs/common/load.sas` | relative - prefixed with the target's `appLoc` |
| `/Public/app/jobs/load.sas` | absolute - used exactly as written |

On Viya a job is a job definition and the path is the folder it lives in. On SASjs Server a job is a `.sas` file in the drive, and the runtime is chosen from its extension as it is for `sasjs run`. Both forms are deliberate. A relative location follows the target's `appLoc`, which is what makes one flow file portable between targets and app locations; a leading `/` overrides `appLoc` on purpose, for a job that lives outside the app location or on a shared path that several targets point at.

If the job cannot be found, the flow reports the server's own message rather than a count of failures - `The Program at (/jobs/common/load) does not exist.` names the path it tried.

## sasjs flow execute

Used to trigger the execution a flow of jobs on the SAS server.

### Syntax

> `sasjs flow execute --source /local/flow.json --logFolder /local/log/folder --csvFile /local/some.csv -t targetName`

The following arguments are optional:

* `logFolder` - will default to the `sasjsresults` folder
* `csvFile` - will also default to the `sasjsresults` folder
* `t` - will default to the `defaultTarget` attribute (if available)
* `streamLog` - writes each job's log to `logFolder` while it runs rather than at the end. Viya only: on SASjs Server a job's log is written when the job finishes, so there is nothing to stream.

### Usage

```
# run the flow of jobs using the target defined in sasjs add
sasjs flow execute -s /local/flow.json -l /local/log/folder --csvFile /local/some.csv -t myTarget
```

This will schedule SAS jobs and execute them according to the flow definition in the JSON file. Job logs will be returned as ".log' text files and saved to the local (`--logFolder`) folder. Details of the Job Executions and their status will be saved to the CSV file.

A flow that finishes with a job that did not succeed exits `6`, and the failure message names the job and the results file. A flow that could not be run at all - a source file that will not parse, an unreachable server - exits `2`. That distinction is what lets a pipeline tell "the batch failed" from "the CLI could not start it".

## Log checking

The log this command receives is read for `ERROR`s, `WARNING`s and the notes that flag a problem, and reported when there is anything in it. Pass `--logcheck` to fail the command on what the log says - a program can print `ERROR` and still return cleanly, which is the case this catches. See [sasjs logcheck](/logcheck) for the policy, the suppressions and the output formats.

## See Also

- [sasjs job execute](/#sasjs-job-execute)

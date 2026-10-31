---
layout: article
title: A Scheduler for executing SAS Viya Jobs
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

The above is named "simpleFlow" with one flow named "flow01" and two Viya Jobs - which will execute in parallel (as they are in the same flow).

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

## sasjs flow execute

Used to trigger the execution a flow of jobs on the SAS server.

### Syntax

> `sasjs flow execute --source /local/flow.json --logFolder /local/log/folder --csvFile /local/some.csv -t targetName`

The following arguments are optional:

* `logFolder` - will default to the `sasjsresults` folder
* `csvFile` - will also default to the `sasjsresults` folder
* `t` - will default to the `defaultTarget` attribute (if available)

### Usage

```
# run the flow of jobs using the target defined in sasjs add
sasjs flow execute -s /local/flow.json -l /local/log/folder --csvFile /local/some.csv -t myTarget
```

This will schedule SAS jobs and execute them according to the flow definition in the JSON file. Job logs will be returned as ".log' text files and saved to the local (`--logFolder`) folder. Details of the Job Executions and their status will be saved to the CSV file.

## See Also

- [sasjs job execute](/#sasjs-job-execute)

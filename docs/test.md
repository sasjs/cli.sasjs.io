---
layout: article
title: Testing
description: How to run unit tests in SAS projects, using SAS language and SASjs
---

# sasjs test

The `sasjs test` command triggers deployed SAS unit tests for execution and collects test results.

## Syntax

```
sasjs test <filteringString> --source <testFlowPath> --outDirectory <folderPath> -t <targetName>
```

- Providing `filteringString` is optional. If not present, all tests mentioned in test flow file will be executed.
- Providing `source` flag is optional. If not present, CLI will use test flow located at `sasjsbuild/testFlow.json`.
- Providing `outDirectory` flag is optional. If not present, CLI will use save outputs into sasjsresults folder.

## Configuration

Test configuration can be provided at root or target level. Configuration example:

```
testConfig: {
  "initProgram": "sasjs/tests/testinit.sas",
  "termProgram": "sasjs/tests/testterm.sas",
  "macroVars": {
    "testVar": "testValue"
  },
  "testSetUp": "sasjs/tests/testsetup.sas",
  "testTearDown": "sasjs/tests/testteardown.sas"
}
```

- `testSetUp` will be executed prior to all tests
- `testTearDown` will be executed after all tests

## File name convention

Only files names that match following pattern will be considered as tests. Pattern:

```
[name].test.[order(optional)].sas
```

Examples:

```
someService.test.sas
someJob.test.0.sas
someJob.test.1.sas
```

- Providing order number is optional, if provided, test will be executed accordingly to this number (`someJob.test.0.sas` first and `someJob.test.1.sas` second).

## Coverage

Service, job or macro is considered covered if there is a test file with the same name, for example:

```
├── someService.sas
├── someService.test.sas
├── someJob.sas
└── someMacro.test.sas
```

- In example above, `someService` will be considered covered, `someJob` will be considered not covered and `someMacro.test` will be considered as standalone test.

## Test body

Test example that provides result:

```
data work.test_results;
  test_description="some description";
  test_result="PASS";
  output;
run;
%webout(OPEN)
%webout(OBJ, test_results)
%webout(CLOSE)
```

- Providing `test_result` is required to define if test `PASS` or `FAIL`.

## Tests flow

SAS unit tests will be executed one after another. Execution order is described in `sasjsbuild/testFlow.json` which is created as part of compilation process (`sasjs compile`).

## Tests results

By default test results will be saved in `sasjsresults` folder. An example of `sasjsresults` folder structure:

```
├── logs
│  ├── macros_someMacro.test.1.log
│  ├── macros_someMacro.test.log
│  ├── services_someService.test.log
│  ├── jobs_someJob.test.log
│  ├── testteardown.log
│  └── testsetup.log
├── testResults.csv
└── testResults.json
```

## Running SAS Tests with SASjs

In order to run test, take the following steps:

1. Provide tests configuration in `sasjs/sasjsconfig.json`
2. Create test files in services, jobs or macro folders.
3. Execute `sasjs cbd -t <targetName>` to compile and deploy test files
4. Execute `sasjs test -t <targetName>`
5. Visit `sasjsresults` to review results

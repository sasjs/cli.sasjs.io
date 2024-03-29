---
layout: article
title: Test
og_title: sasjs test - for Jobs, Services and Macros
description: Create isolated unit tests for SAS Jobs, Services and Macros.  View coverage reports, export results in CSV, JSON, JUnit XML and LCOV.
og_image: img/sasjs_test.png
---

# sasjs test

The `sasjs test` command triggers deployed SAS unit tests for execution, and collects the test results in JSON, JUnit XML, LCOV and CSV formats.

Results are also displayed in the console, as follows:

![sas tests](img/sasjs_test.png)

Tests are compiled & deployed as _services_ (STPs in SAS 9, Jobs in Viya, Stored Programs in SASjs/server).  In this way, **every test is completely isolated with it's own SAS session**.

To create a test, simply create a file with the same name as the Job / Service / Macro being tested, but with a `.test.sas` extension.  If you have multiple tests, you can add a `.test.[integer].sas` extension, and the tests will proceed according to the integers provided.

You can send back one or more test results in a single program by creating a table called `work.test_results` with the following entries:

|TEST_DESCRIPTION:$256|TEST_RESULT:$4|TEST_COMMENTS:$256|
|---|---|---|
|Some description|PASS|Some run related comment|
|Another test description|FAIL|some explanation of the failure|

The results should be sent back using the following macros (which could be in your `termProgram` entry):

```sas
/* do some tests */
data some sas tests;
  set whatever you like;
run;

/* create a test_results table */
data work.test_results;
  /* mandatory values */
  test_description="some description";
  test_result="PASS"; /* or FAIL */
  /* optional value */
  test_comments="We did this & that happened";
  output;
run;

/* send it back with the precompiled webout macro */
%webout(OPEN)
%webout(OBJ, TEST_RESULTS)
%webout(CLOSE)
```

Examples of tests for SAS Macros are available in the [SASjs/CORE library](https://github.com/sasjs/core/tree/main/tests).  There are also a series of [assertion macros](#assertion-macros) available.

## Test Locations

Tests will only be compiled if they exist in a folder listed in one of the following sasjsconfig arrays:

* [macroFolders](https://cli.sasjs.io/sasjsconfig.html#macroFolders) 
* [jobFolders](https://cli.sasjs.io/sasjsconfig.html#jobConfig_jobFolders)
* [serviceFolders](https://cli.sasjs.io/sasjsconfig.html#serviceConfig_serviceFolders)


## Syntax

```bash
sasjs test <filteringString> --source <testFlowPath> --outDirectory <folderPath> -t <targetName> --ignoreFail
```

- Providing `filteringString` is optional. If not present, *all* tests mentioned in test flow file will be executed.
- Providing `source` flag is optional. If not present, CLI will use test flow located at `sasjsbuild/testFlow.json` (created when running `sasjs build`).
- Providing `outDirectory` flag is optional. If not present, CLI will save outputs into the temporary `sasjsresults` folder.
- Providing ignore fail (--ignoreFail or -iF) flag is optional. If present CLI will return exit code 0 even if tests are failing. Useful when the requirement is not to make CI Pipeline fail.`


## Examples

Execute all tests for the default target:

```bash
sasjs test
```

Execute all tests in the macros folder:

```sh
sasjs test /macros/
```

Execute all tests starting with "mv_" and save the output in 'myresults' folder

```sh
sasjs test mv_ --outDirectory /somedir/myresults
```

Prevent command fail (for example in CI Pipeline):

```bash
sasjs test --ignoreFail
```

## Configuration

Test configuration can be provided at root or target level. Configuration example:

```json
"testConfig": {
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
- `testTearDown` will be executed after all tests have finished
- `initProgram` is inserted at the start of every test
- `termProgram` is inserted at the end of every test
- `macroVars` are defined at the start of every test

## File Name Convention

Only files names that match following pattern will be considered as tests. Pattern:

```
[filename].test<.integer>.sas
```

Examples:

```
some_service.test.sas
some_job.test.0.sas
some_job.test.1.sas
```

- Providing a test integer is optional, if provided, the tests will be executed accordingly to numerical order - eg `some_job.test.0.sas` first and `some_job.test.1.sas` second.

## Coverage

A SAS Service, Job or Macro is considered covered if there is a test file with the same **filename**, for example:

```
├── some_service.sas
├── some_service.test.sas
├── some_job.sas
└── some_macro.test.sas
```

In the example above, `some_service` will be considered covered, `some_job` will be considered **not** covered and `some_macro.test` will be considered as a standalone test.

Overall coverage is displayed, along with a group summary for Jobs, Services and Macros.

![sas test coverage](img/coverage.png)

!!! note
    We are planning a more 'intelligent' coverage system that can detect whether a macro / servivce / job was executed as part of the test suite.  If this would be helpful to your project, do [get in touch](https://sasapps.io/contact-us)!


## Test Body

An example of a test that provides a result:

```sas
data work.test_results;
  test_description="some description";
  test_result="PASS";
  test_comments="We did this & that happened";
  output;
run;
%webout(OPEN)
%webout(OBJ, test_results)
%webout(CLOSE)
```

Providing the `test_results` table with a `test_result` variable is required, in order for the frontend to determine if the test is a `PASS` or `FAIL`.  The `webout()` macro definition will be deployed as precode in the compiled test, and is essentially a wrapper for [mm_webout.sas](https://core.sasjs.io/mm__webout_8sas.html) or [mv_webout.sas](https://core.sasjs.io/mv__webout_8sas.html) according the [serverType](https://cli.sasjs.io/sasjsconfig.html#targets_items_anyOf_i0_serverType) of the [target](https://cli.sasjs.io/faq/#what-is-the-difference-between-local-and-global-targets).

## Test Flow

SAS unit tests will be executed one after another. Execution order is described in `sasjsbuild/testFlow.json` which is created as part of compilation process (`sasjs compile`).

## Test Results

By default test results will be saved in the `sasjsresults` folder. An example of `sasjsresults` folder structure:

```
├── logs
│  ├── macros_some_macro.test.1.log
│  ├── macros_some_macro.test.log
│  ├── services_some_service.test.log
│  ├── jobs_some_job.test.log
│  ├── testteardown.log
│  └── testsetup.log
├── testResults.csv
└── testResults.json
└── testResults.xml
```

Results are saved in CSV, JSON and JUnit XML formats.

## Assertion Macros

A number of ready made assertion macros are available in the SASjs [Core](https://core.sasjs.io) library:

* [mp_assert](https://core.sasjs.io/mp__assert_8sas.html) - generic assertion
* [mp_assertcols](https://core.sasjs.io/mp__assertcols_8sas.html) - Asserts the existence (or not) of certain columns
* [mp_assertcolvals](https://core.sasjs.io/mp__assertcolvals_8sas.html) - Asserts the existence (or not) of particular column values
* [mp_assertdsobs](https://core.sasjs.io/mp__assertdsobs_8sas.html) - Asserts the existence (or not) of dataset observations
* [mp_assertscope](https://core.sasjs.io/mp__assertscope_8sas.html) - Compares before/after to detect scope leakage in a SAS Macro

## Running SAS Tests with SASjs

In order to run tests, take the following steps:

1. Provide tests configuration (testConfig) in the `sasjs/sasjsconfig.json` file
2. Create test files in services, jobs or macro folders (with .test.sas extension).
3. Execute `sasjs cbd -t <targetName>` to compile and deploy the tests as isolated SAS web services
4. Execute `sasjs test -t <targetName>`
5. Visit the local `sasjsresults` folder to review results.

To assist with debugging, all logs are captured, and we generate a URL so that you can easily click and re-run any particular individual test.

CSV Format:

![sas test results CSV](img/testresultscsv.png)

JSON Format:
![sas test results JSON](img/testresultsjson.png)

JUnit XML Format:
![sas test results XML](img/testresultsxml.png)

Console Output:
![sas test results CONSOLE](img/testresultsconsole.png)


## Demo Video

A demonstration of `sasjs test` by the developer, [Yury Shkoda](https://www.linkedin.com/in/yuryshkoda) was provided at a [Sasensei](https://sasensei.com) SID event in July 2021 - available below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OF6yhbKJyJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


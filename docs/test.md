---
layout: article
title: Testing
description: How to run unit tests in SAS projects, using SAS language and SASjs
---

# sasjs test

The `sasjs test` command is a work in progress! However the existing commands already provide a framework by which you can prepare your tests. And our proposed approach will migrate easily to the final `sasjs test` once it arrives.

## Running SAS Tests right now with SASjs

You can run tests in SAS right now using the SASjs framework. We recommend that you set each test up as a Service (rather than a Job), as the final command will fetch the test results from the output.

To set up the tests, take the following steps:

1. Create a "tests" folder in your local repository
2. Add that folder to your [serviceFolders](https://cli.sasjs.io/sasjsconfig.html#serviceConfig_serviceFolders) array
3. Create a 'sasjs_testresults' table in an accessible library
4. Start writing tests

The results table will look like this:

```
proc sql;
create table YOURLIB.sasjs_testresults (
  testrun_id num
  ,snd_id INTEGER
  ,vesselid INTEGER
```

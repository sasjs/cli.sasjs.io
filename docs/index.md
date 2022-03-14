# SASjs CLI Documentation

The SASjs Command-Line-Interface is a swiss-army knife with a flexible set of options and utilities for Dev Ops on both SAS 9 and Viya.

Core functionalities:

- Creation of a SAS GIT repository in an 'opinionated' way
- Compilation each service, including all the dependent macros / macro variables and pre / post code
- Build - creation of the master SAS deployment, including build macros, macro variables, and pre/post code
- Deployment - execute an array of local scripts and remote SAS programs to create your app on the SAS Server.

There is also a feature to let you deploy your frontend as a service, bypassing the need to access the SAS Web Server.

## Commands

| Command | Description |
| :---: |  :---:  |
| [add](/add) | Provides a series of prompts used to define a SAS [target](https://sasjs.io/glossary#target) along with the relevant connection details (if SAS Viya) |
| [auth](/auth) | Provides the prompts for authentication against a SAS [target](https://sasjs.io/glossary#target) (SAS 9 or Viya) |
| [build](/build) | takes all of the input jobs and services and creates a build pack |
| cbd | A shortcut to [compile](/compile), [build](/build) and [deploy](/deploy) your project with one command! |
| [compile](/compile) | Extracts all the dependencies and input programs for each service / job and includes them in a single file ready for deployment |
| [context](/context) | List, export, create, edit, and delete SAS Compute contexts |
| [create](/create) | Initialise a SASjs repository, either in plain form or using a range of templates |
| [deploy](/deploy) | Perform the actual deployment of a SASjs project into SAS 9 or Viya |
| [doc](/doc) | Generate HTML documentation based on the Doxygen headers used in the SAS Macros, Programs, Jobs & Services. |
| [flow](/flow) | SAS job scheduler that takes a JSON file as input, and submit all the jobs sequentially, logging the results to an output CSV file |
| [folder](/folder) | Management of logical Viya folders |
| [job](/job) | Manage & Execute SAS Jobs |
| [lint](/lint) | Lint your SAS code and identify commmon problems / undesirable coding practices |
| [request](/request) | Execute SASjs web services from the commandline |
| [run](/run) | Run arbitrary SAS code in a Viya Compute Session, directly from the terminal (or commandline session) |
| [servicepack](/servicepack) | The SASjs Service Pack is a collection of services and folder objects. The servicepack command lets you deploy them easily |
| [test](/test) | Execute SAS unit tests and collect results in json/csv formats together with logs |

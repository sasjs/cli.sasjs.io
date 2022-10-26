# SASjs Config File

- [1. Property `SASjs Config File > binaryFolders`](#binaryFolders)
- [2. Property `SASjs Config File > buildOutputFolder`](#buildOutputFolder)
- [3. Property `SASjs Config File > defaultTarget`](#defaultTarget)
- [4. Property `SASjs Config File > docConfig`](#docConfig)
  - [4.1. Property `SASjs Config File > docConfig > displayMacroCore`](#docConfig_displayMacroCore)
  - [4.2. Property `SASjs Config File > docConfig > outDirectory`](#docConfig_outDirectory)
  - [4.3. Property `SASjs Config File > docConfig > dataControllerUrl`](#docConfig_dataControllerUrl)
  - [4.4. Property `SASjs Config File > docConfig > enableLineage`](#docConfig_enableLineage)
  - [4.5. Property `SASjs Config File > docConfig > doxyContent`](#docConfig_doxyContent)
    - [4.5.1. Property `SASjs Config File > docConfig > doxyContent > favIcon`](#docConfig_doxyContent_favIcon)
    - [4.5.2. Property `SASjs Config File > docConfig > doxyContent > footer`](#docConfig_doxyContent_footer)
    - [4.5.3. Property `SASjs Config File > docConfig > doxyContent > header`](#docConfig_doxyContent_header)
    - [4.5.4. Property `SASjs Config File > docConfig > doxyContent > layout`](#docConfig_doxyContent_layout)
    - [4.5.5. Property `SASjs Config File > docConfig > doxyContent > logo`](#docConfig_doxyContent_logo)
    - [4.5.6. Property `SASjs Config File > docConfig > doxyContent > readMe`](#docConfig_doxyContent_readMe)
    - [4.5.7. Property `SASjs Config File > docConfig > doxyContent > stylesheet`](#docConfig_doxyContent_stylesheet)
    - [4.5.8. Property `SASjs Config File > docConfig > doxyContent > path`](#docConfig_doxyContent_path)
- [5. Property `SASjs Config File > httpsAgentOptions`](#httpsAgentOptions)
  - [5.1. Property `SASjs Config File > httpsAgentOptions > allowInsecureRequests`](#httpsAgentOptions_allowInsecureRequests)
  - [5.2. Property `SASjs Config File > httpsAgentOptions > caPath`](#httpsAgentOptions_caPath)
  - [5.3. Property `SASjs Config File > httpsAgentOptions > keyFile`](#httpsAgentOptions_keyFile)
  - [5.4. Property `SASjs Config File > httpsAgentOptions > certFile`](#httpsAgentOptions_certFile)
  - [5.5. Property `SASjs Config File > httpsAgentOptions > requestCert`](#httpsAgentOptions_requestCert)
  - [5.6. Property `SASjs Config File > httpsAgentOptions > rejectUnauthorized`](#httpsAgentOptions_rejectUnauthorized)
- [6. Property `SASjs Config File > buildConfig`](#buildConfig)
  - [6.1. Property `SASjs Config File > buildConfig > buildOutputFileName`](#buildConfig_buildOutputFileName)
  - [6.2. Property `SASjs Config File > buildConfig > buildOutputFolder`](#buildConfig_buildOutputFolder)
  - [6.3. Property `SASjs Config File > buildConfig > buildResultsFolder`](#buildConfig_buildResultsFolder)
  - [6.4. Property `SASjs Config File > buildConfig > initProgram`](#buildConfig_initProgram)
  - [6.5. Property `SASjs Config File > buildConfig > termProgram`](#buildConfig_termProgram)
  - [6.6. Property `SASjs Config File > buildConfig > macroVars`](#buildConfig_macroVars)
- [7. Property `SASjs Config File > deployConfig`](#deployConfig)
  - [7.1. Property `SASjs Config File > deployConfig > deployScripts`](#deployConfig_deployScripts)
  - [7.2. Property `SASjs Config File > deployConfig > deployServicePack`](#deployConfig_deployServicePack)
- [8. Property `SASjs Config File > serviceConfig`](#serviceConfig)
  - [8.1. Property `SASjs Config File > serviceConfig > serviceFolders`](#serviceConfig_serviceFolders)
  - [8.2. Property `SASjs Config File > serviceConfig > initProgram`](#serviceConfig_initProgram)
  - [8.3. Property `SASjs Config File > serviceConfig > termProgram`](#serviceConfig_termProgram)
  - [8.4. Property `SASjs Config File > serviceConfig > macroVars`](#serviceConfig_macroVars)
- [9. Property `SASjs Config File > jobConfig`](#jobConfig)
  - [9.1. Property `SASjs Config File > jobConfig > jobFolders`](#jobConfig_jobFolders)
  - [9.2. Property `SASjs Config File > jobConfig > initProgram`](#jobConfig_initProgram)
  - [9.3. Property `SASjs Config File > jobConfig > termProgram`](#jobConfig_termProgram)
  - [9.4. Property `SASjs Config File > jobConfig > macroVars`](#jobConfig_macroVars)
- [10. Property `SASjs Config File > streamConfig`](#streamConfig)
  - [10.1. Property `SASjs Config File > streamConfig > assetPaths`](#streamConfig_assetPaths)
  - [10.2. Property `SASjs Config File > streamConfig > streamLogo`](#streamConfig_streamLogo)
  - [10.3. Property `SASjs Config File > streamConfig > streamWeb`](#streamConfig_streamWeb)
  - [10.4. Property `SASjs Config File > streamConfig > streamWebFolder`](#streamConfig_streamWebFolder)
  - [10.5. Property `SASjs Config File > streamConfig > webSourcePath`](#streamConfig_webSourcePath)
  - [10.6. Property `SASjs Config File > streamConfig > streamServiceName`](#streamConfig_streamServiceName)
- [11. Property `SASjs Config File > testConfig`](#testConfig)
  - [11.1. Property `SASjs Config File > testConfig > initProgram`](#testConfig_initProgram)
  - [11.2. Property `SASjs Config File > testConfig > termProgram`](#testConfig_termProgram)
  - [11.3. Property `SASjs Config File > testConfig > macroVars`](#testConfig_macroVars)
  - [11.4. Property `SASjs Config File > testConfig > testSetUp`](#testConfig_testSetUp)
  - [11.5. Property `SASjs Config File > testConfig > testTearDown`](#testConfig_testTearDown)
- [12. Property `SASjs Config File > macroFolders`](#macroFolders)
- [13. Property `SASjs Config File > programFolders`](#programFolders)
- [14. Property `SASjs Config File > syncFolder`](#syncFolder)
- [15. Property `SASjs Config File > targets`](#targets)
  - [15.1. SASjs Config File > targets > targets items](#autogenerated_heading_2)
    - [15.1.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets`](#targets_items_anyOf_i0)
      - [15.1.1.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > name`](#targets_items_anyOf_i0_name)
      - [15.1.1.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serverType`](#targets_items_anyOf_i0_serverType)
      - [15.1.1.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > appLoc`](#targets_items_anyOf_i0_appLoc)
      - [15.1.1.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > binaryFolders`](#targets_items_anyOf_i0_binaryFolders)
      - [15.1.1.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig`](#targets_items_anyOf_i0_buildConfig)
        - [15.1.1.5.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > buildOutputFileName`](#targets_items_anyOf_i0_buildConfig_buildOutputFileName)
        - [15.1.1.5.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > buildOutputFolder`](#targets_items_anyOf_i0_buildConfig_buildOutputFolder)
        - [15.1.1.5.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > buildResultsFolder`](#targets_items_anyOf_i0_buildConfig_buildResultsFolder)
        - [15.1.1.5.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > initProgram`](#targets_items_anyOf_i0_buildConfig_initProgram)
        - [15.1.1.5.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > termProgram`](#targets_items_anyOf_i0_buildConfig_termProgram)
        - [15.1.1.5.6. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > macroVars`](#targets_items_anyOf_i0_buildConfig_macroVars)
      - [15.1.1.6. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > contextName`](#targets_items_anyOf_i0_contextName)
      - [15.1.1.7. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > deployConfig`](#targets_items_anyOf_i0_deployConfig)
        - [15.1.1.7.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > deployConfig > deployScripts`](#targets_items_anyOf_i0_deployConfig_deployScripts)
        - [15.1.1.7.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > deployConfig > deployServicePack`](#targets_items_anyOf_i0_deployConfig_deployServicePack)
      - [15.1.1.8. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions`](#targets_items_anyOf_i0_httpsAgentOptions)
        - [15.1.1.8.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > allowInsecureRequests`](#targets_items_anyOf_i0_httpsAgentOptions_allowInsecureRequests)
        - [15.1.1.8.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > caPath`](#targets_items_anyOf_i0_httpsAgentOptions_caPath)
        - [15.1.1.8.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > keyFile`](#targets_items_anyOf_i0_httpsAgentOptions_keyFile)
        - [15.1.1.8.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > certFile`](#targets_items_anyOf_i0_httpsAgentOptions_certFile)
        - [15.1.1.8.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > requestCert`](#targets_items_anyOf_i0_httpsAgentOptions_requestCert)
        - [15.1.1.8.6. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > rejectUnauthorized`](#targets_items_anyOf_i0_httpsAgentOptions_rejectUnauthorized)
      - [15.1.1.9. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serverUrl`](#targets_items_anyOf_i0_serverUrl)
      - [15.1.1.10. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serviceConfig`](#targets_items_anyOf_i0_serviceConfig)
        - [15.1.1.10.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serviceConfig > serviceFolders`](#targets_items_anyOf_i0_serviceConfig_serviceFolders)
        - [15.1.1.10.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serviceConfig > initProgram`](#targets_items_anyOf_i0_serviceConfig_initProgram)
        - [15.1.1.10.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serviceConfig > termProgram`](#targets_items_anyOf_i0_serviceConfig_termProgram)
        - [15.1.1.10.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serviceConfig > macroVars`](#targets_items_anyOf_i0_serviceConfig_macroVars)
      - [15.1.1.11. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > jobConfig`](#targets_items_anyOf_i0_jobConfig)
        - [15.1.1.11.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > jobConfig > jobFolders`](#targets_items_anyOf_i0_jobConfig_jobFolders)
        - [15.1.1.11.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > jobConfig > initProgram`](#targets_items_anyOf_i0_jobConfig_initProgram)
        - [15.1.1.11.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > jobConfig > termProgram`](#targets_items_anyOf_i0_jobConfig_termProgram)
        - [15.1.1.11.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > jobConfig > macroVars`](#targets_items_anyOf_i0_jobConfig_macroVars)
      - [15.1.1.12. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig`](#targets_items_anyOf_i0_docConfig)
        - [15.1.1.12.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > displayMacroCore`](#targets_items_anyOf_i0_docConfig_displayMacroCore)
        - [15.1.1.12.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > outDirectory`](#targets_items_anyOf_i0_docConfig_outDirectory)
        - [15.1.1.12.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > dataControllerUrl`](#targets_items_anyOf_i0_docConfig_dataControllerUrl)
        - [15.1.1.12.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > enableLineage`](#targets_items_anyOf_i0_docConfig_enableLineage)
        - [15.1.1.12.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent`](#targets_items_anyOf_i0_docConfig_doxyContent)
          - [15.1.1.12.5.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > favIcon`](#targets_items_anyOf_i0_docConfig_doxyContent_favIcon)
          - [15.1.1.12.5.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > footer`](#targets_items_anyOf_i0_docConfig_doxyContent_footer)
          - [15.1.1.12.5.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > header`](#targets_items_anyOf_i0_docConfig_doxyContent_header)
          - [15.1.1.12.5.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > layout`](#targets_items_anyOf_i0_docConfig_doxyContent_layout)
          - [15.1.1.12.5.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > logo`](#targets_items_anyOf_i0_docConfig_doxyContent_logo)
          - [15.1.1.12.5.6. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > readMe`](#targets_items_anyOf_i0_docConfig_doxyContent_readMe)
          - [15.1.1.12.5.7. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > stylesheet`](#targets_items_anyOf_i0_docConfig_doxyContent_stylesheet)
          - [15.1.1.12.5.8. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > path`](#targets_items_anyOf_i0_docConfig_doxyContent_path)
      - [15.1.1.13. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig`](#targets_items_anyOf_i0_streamConfig)
        - [15.1.1.13.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > assetPaths`](#targets_items_anyOf_i0_streamConfig_assetPaths)
        - [15.1.1.13.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > streamLogo`](#targets_items_anyOf_i0_streamConfig_streamLogo)
        - [15.1.1.13.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > streamWeb`](#targets_items_anyOf_i0_streamConfig_streamWeb)
        - [15.1.1.13.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > streamWebFolder`](#targets_items_anyOf_i0_streamConfig_streamWebFolder)
        - [15.1.1.13.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > webSourcePath`](#targets_items_anyOf_i0_streamConfig_webSourcePath)
        - [15.1.1.13.6. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > streamServiceName`](#targets_items_anyOf_i0_streamConfig_streamServiceName)
      - [15.1.1.14. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > syncDirectories`](#targets_items_anyOf_i0_syncDirectories)
      - [15.1.1.15. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > syncFolder`](#targets_items_anyOf_i0_syncFolder)
      - [15.1.1.16. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig`](#targets_items_anyOf_i0_testConfig)
        - [15.1.1.16.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig > initProgram`](#targets_items_anyOf_i0_testConfig_initProgram)
        - [15.1.1.16.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig > termProgram`](#targets_items_anyOf_i0_testConfig_termProgram)
        - [15.1.1.16.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig > macroVars`](#targets_items_anyOf_i0_testConfig_macroVars)
        - [15.1.1.16.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig > testSetUp`](#targets_items_anyOf_i0_testConfig_testSetUp)
        - [15.1.1.16.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig > testTearDown`](#targets_items_anyOf_i0_testConfig_testTearDown)
      - [15.1.1.17. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > macroFolders`](#targets_items_anyOf_i0_macroFolders)
      - [15.1.1.18. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > programFolders`](#targets_items_anyOf_i0_programFolders)

**Title:** SASjs Config File

|                           |                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------ |
| **Type**                  | `object`                                                                             |
| **Required**              | No                                                                                   |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.")            |
| **Default**               | `{}`                                                                                 |
| **Defined in**            | https://raw.githubusercontent.com/sasjs/utils/main/src/types/sasjsconfig-schema.json |

**Description:** The SASjs Config file provides the settings and structure for your SASjs project. 

**Example:** 

```json
{
    "macroFolders": [
        "macros"
    ],
    "programFolders": [
        "programs"
    ],
    "binaryFolders": [
        "binaries"
    ],
    "defaultTarget": "viya",
    "targets": [
        {
            "name": "viya",
            "serverType": "SASVIYA",
            "serverUrl": "https://sas.sasjs.com",
            "appLoc": "/Public/app",
            "contextName": "SAS Job Execution compute context",
            "deployConfig": {
                "deployServicePack": true,
                "deployScripts": [
                    "sasjsbuild/myviyadeploy.sas"
                ]
            },
            "serviceConfig": {
                "serviceFolders": [
                    "targets/viya/services/admin"
                ],
                "initProgram": "build/serviceinit.sas",
                "termProgram": "build/serviceinit.sas",
                "macroVars": {
                    "name": "viyavalue",
                    "extravar": "this too"
                }
            },
            "jobConfig": {
                "jobFolders": [],
                "initProgram": "",
                "termProgram": "",
                "macroVars": {}
            },
            "streamConfig": {
                "assetPaths": [],
                "streamWeb": false,
                "streamWebFolder": "webv",
                "webSourcePath": "dist"
            },
            "testConfig": {
                "initProgram": "sasjs/tests/testinit.sas",
                "termProgram": "sasjs/tests/testterm.sas",
                "macroVars": {
                    "testVar": "testValue"
                },
                "testSetUp": "sasjs/tests/testsetup.sas",
                "testTearDown": "sasjs/tests/testteardown.sas"
            },
            "macroFolders": [
                "targets/viya/macros"
            ],
            "programFolders": [],
            "binaryFolders": [
                "binaries"
            ]
        },
        {
            "name": "sas9",
            "serverType": "SAS9",
            "serverUrl": "https://sas.sasjs.com:7980",
            "appLoc": "/User Folders/&sysuserid/My Folder",
            "serverName": "Foundation",
            "repositoryName": "SASApp",
            "buildConfig": {
                "buildOutputFileName": "mysas9deploy.sas",
                "initProgram": "",
                "termProgram": "",
                "macroVars": {}
            },
            "deployConfig": {
                "deployScripts": [
                    "build/deploysas9.sh"
                ],
                "deployServicePack": false
            },
            "serviceConfig": {
                "serviceFolders": [
                    "targets/sas9/services/admin"
                ],
                "initProgram": "",
                "termProgram": "build/servicetermother.sas",
                "macroVars": {}
            },
            "streamConfig": {
                "assetPaths": [],
                "streamWeb": false,
                "streamWebFolder": "web9",
                "webSourcePath": "dist"
            },
            "testConfig": {
                "initProgram": "sasjs/tests/testinit.sas",
                "termProgram": "sasjs/tests/testterm.sas",
                "macroVars": {
                    "testVar": "testValue"
                },
                "testSetUp": "sasjs/tests/testsetup.sas",
                "testTearDown": "sasjs/tests/testteardown.sas"
            },
            "macroFolders": [
                "targets/sas9/macros"
            ],
            "programFolders": [],
            "binaryFolders": [
                "binaries"
            ]
        }
    ]
}
```

| Property                                   | Pattern | Type   | Deprecated | Definition | Title/Description        |
| ------------------------------------------ | ------- | ------ | ---------- | ---------- | ------------------------ |
| - [binaryFolders](#binaryFolders )         | No      | array  | No         | -          | The binaryFolders array  |
| - [buildOutputFolder](#buildOutputFolder ) | No      | string | No         | -          | buildOutputFolder        |
| - [defaultTarget](#defaultTarget )         | No      | string | No         | -          | Default Target           |
| - [docConfig](#docConfig )                 | No      | object | No         | -          | The docConfig schema     |
| - [httpsAgentOptions](#httpsAgentOptions ) | No      | object | No         | -          | httpsAgentOptions        |
| - [buildConfig](#buildConfig )             | No      | object | No         | -          | buildConfig              |
| - [deployConfig](#deployConfig )           | No      | object | No         | -          | The deployConfig schema  |
| - [serviceConfig](#serviceConfig )         | No      | object | No         | -          | The serviceConfig schema |
| - [jobConfig](#jobConfig )                 | No      | object | No         | -          | The jobConfig schema     |
| - [streamConfig](#streamConfig )           | No      | object | No         | -          | streamConfig             |
| - [testConfig](#testConfig )               | No      | object | No         | -          | testConfig               |
| - [macroFolders](#macroFolders )           | No      | array  | No         | -          | The macroFolders array   |
| - [programFolders](#programFolders )       | No      | array  | No         | -          | The programFolders array |
| - [syncFolder](#syncFolder )               | No      | string | No         | -          | Sync Folder              |
| - [targets](#targets )                     | No      | array  | No         | -          | The targets array        |

## <a name="binaryFolders"></a>1. Property `SASjs Config File > binaryFolders`

**Title:** The binaryFolders array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |

**Description:** These local folders are searched for Binary Files when running sasjs compile.  Folders are relative to the sasjs/sasjsconfig.json file.

**Example:** 

```json
[
    "binaries",
    "../../more_binaries"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

## <a name="buildOutputFolder"></a>2. Property `SASjs Config File > buildOutputFolder`

**Title:** buildOutputFolder

|              |                |
| ------------ | -------------- |
| **Type**     | `string`       |
| **Required** | No             |
| **Default**  | `"sasjsbuild"` |

**Description:** In a local config, outputs go to the `sasjsbuild` folder by default.  In global, the default is `~/.sasjsbuild`.

**Examples:** 

```json
"sasjsbuild"
```

```json
".sasjsbuild"
```

## <a name="defaultTarget"></a>3. Property `SASjs Config File > defaultTarget`

**Title:** Default Target

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `"viya"` |

**Description:** If a target is not specified, this target is used by default.  The default target must exist in the (local) targets array.

**Example:** 

```json
"viya"
```

## <a name="docConfig"></a>4. Property `SASjs Config File > docConfig`

**Title:** The docConfig schema

|                           |                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                                                                                     |
| **Required**              | No                                                                                                                                           |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.")                                                                    |
| **Default**               | `{"dataControllerUrl": "https://mysasserver.com/web/datacontroller/#", "enableLineage": true, "doxyContent": {"readMe": "../../README.md"}}` |

**Description:** SASjs uses doxygen to auto-generate HTML documentation using the headers in your SAS programs, macros, services & jobs. For more info, see [https://cli.sasjs.io/doc](https://cli.sasjs.io/doc).  Some properties are taken from package.json (such as the project Name).

**Example:** 

```json
{
    "displayMacroCore": true,
    "outDirectory": "/some/output/directory",
    "dataControllerUrl": "https://mysasserver.com/web/datacontroller/#",
    "enableLineage": true,
    "doxyContent": {
        "readMe": "../../my/custom/homepage.md",
        "path": "my/custom/doxy/folder"
    }
}
```

| Property                                             | Pattern | Type    | Deprecated | Definition | Title/Description                      |
| ---------------------------------------------------- | ------- | ------- | ---------- | ---------- | -------------------------------------- |
| - [displayMacroCore](#docConfig_displayMacroCore )   | No      | boolean | No         | -          | The displayMacroCore docConfig option  |
| - [outDirectory](#docConfig_outDirectory )           | No      | string  | No         | -          | The outDirectory docConfig option      |
| - [dataControllerUrl](#docConfig_dataControllerUrl ) | No      | string  | No         | -          | The dataControllerUrl docConfig option |
| - [enableLineage](#docConfig_enableLineage )         | No      | boolean | No         | -          | Enable Lineage                         |
| - [doxyContent](#docConfig_doxyContent )             | No      | object  | No         | -          | doxyContent                            |

### <a name="docConfig_displayMacroCore"></a>4.1. Property `SASjs Config File > docConfig > displayMacroCore`

**Title:** The displayMacroCore docConfig option

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `true`    |

**Description:** The CLI will autocompile macro dependencies that exist in the SASjs Macro Core library.  These will also show in the documentation under 'node_modules'.  If you'd prefer not to show these in the rendered docs, set this value to false.

**Example:** 

```json
true
```

### <a name="docConfig_outDirectory"></a>4.2. Property `SASjs Config File > docConfig > outDirectory`

**Title:** The outDirectory docConfig option

|              |                    |
| ------------ | ------------------ |
| **Type**     | `string`           |
| **Required** | No                 |
| **Default**  | `"sasjsbuild/doc"` |

**Description:** The location to which the generated HTML SAS documentation is written.  If missing, or left blank, the files will be written to the `sasjsbuild/doc` directory (default behaviour).

**Example:** 

```json
"/my/preferred/docs/directory"
```

### <a name="docConfig_dataControllerUrl"></a>4.3. Property `SASjs Config File > docConfig > dataControllerUrl`

**Title:** The dataControllerUrl docConfig option

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** Provide the full URL to Data Controller so that `sasjs doc` can link the lineage diagram directly to the table viewer in [Data Controller](https://datacontroller.io).
If left blank, or undefined, no links will be generated.

**Example:** 

```json
"https://yourserver.co.uk/dcviya/#"
```

### <a name="docConfig_enableLineage"></a>4.4. Property `SASjs Config File > docConfig > enableLineage`

**Title:** Enable Lineage

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `true`    |

**Description:** If true, sasjs doc will generate and display Data Lineage from Jobs and Services.

### <a name="docConfig_doxyContent"></a>4.5. Property `SASjs Config File > docConfig > doxyContent`

**Title:** doxyContent

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** Configuration of the Doxyfile variables

**Example:** 

```json
{
    "favIcon": "favicon.ico",
    "footer": "new_footer.html",
    "header": "new_header.html",
    "layout": "DoxygenLayout.xml",
    "logo": "logo.png",
    "readMe": "../../README.md",
    "stylesheet": "new_stylesheet.css",
    "path": "sasjs/doxy"
}
```

| Property                                           | Pattern | Type   | Deprecated | Definition | Title/Description       |
| -------------------------------------------------- | ------- | ------ | ---------- | ---------- | ----------------------- |
| - [favIcon](#docConfig_doxyContent_favIcon )       | No      | string | No         | -          | Doxygen favicon         |
| - [footer](#docConfig_doxyContent_footer )         | No      | string | No         | -          | Doxygen footer          |
| - [header](#docConfig_doxyContent_header )         | No      | string | No         | -          | Doxygen header          |
| - [layout](#docConfig_doxyContent_layout )         | No      | string | No         | -          | Doxygen Layout XML File |
| - [logo](#docConfig_doxyContent_logo )             | No      | string | No         | -          | Doxygen Logo            |
| - [readMe](#docConfig_doxyContent_readMe )         | No      | string | No         | -          | Doxygen Homepage        |
| - [stylesheet](#docConfig_doxyContent_stylesheet ) | No      | string | No         | -          | Doxygen CSS             |
| - [path](#docConfig_doxyContent_path )             | No      | string | No         | -          | Doxygen Path            |

#### <a name="docConfig_doxyContent_favIcon"></a>4.5.1. Property `SASjs Config File > docConfig > doxyContent > favIcon`

**Title:** Doxygen favicon

|              |                 |
| ------------ | --------------- |
| **Type**     | `string`        |
| **Required** | No              |
| **Default**  | `"favicon.ico"` |

**Description:** The favicon used in the doxygen documentation

#### <a name="docConfig_doxyContent_footer"></a>4.5.2. Property `SASjs Config File > docConfig > doxyContent > footer`

**Title:** Doxygen footer

|              |                     |
| ------------ | ------------------- |
| **Type**     | `string`            |
| **Required** | No                  |
| **Default**  | `"new_footer.html"` |

**Description:** The footer HTML file used in the doxygen documentation

#### <a name="docConfig_doxyContent_header"></a>4.5.3. Property `SASjs Config File > docConfig > doxyContent > header`

**Title:** Doxygen header

|              |                     |
| ------------ | ------------------- |
| **Type**     | `string`            |
| **Required** | No                  |
| **Default**  | `"new_header.html"` |

**Description:** The header HTML file used in the doxygen documentation

#### <a name="docConfig_doxyContent_layout"></a>4.5.4. Property `SASjs Config File > docConfig > doxyContent > layout`

**Title:** Doxygen Layout XML File

|              |                       |
| ------------ | --------------------- |
| **Type**     | `string`              |
| **Required** | No                    |
| **Default**  | `"DoxygenLayout.xml"` |

**Description:** The layout XML file used to build the doxygen documentation

#### <a name="docConfig_doxyContent_logo"></a>4.5.5. Property `SASjs Config File > docConfig > doxyContent > logo`

**Title:** Doxygen Logo

|              |              |
| ------------ | ------------ |
| **Type**     | `string`     |
| **Required** | No           |
| **Default**  | `"logo.png"` |

**Description:** The logo file used by doxygen

#### <a name="docConfig_doxyContent_readMe"></a>4.5.6. Property `SASjs Config File > docConfig > doxyContent > readMe`

**Title:** Doxygen Homepage

|              |                     |
| ------------ | ------------------- |
| **Type**     | `string`            |
| **Required** | No                  |
| **Default**  | `"../../README.md"` |

**Description:** The file used to generate the doxygen homepage (defaults to the readme.md)

#### <a name="docConfig_doxyContent_stylesheet"></a>4.5.7. Property `SASjs Config File > docConfig > doxyContent > stylesheet`

**Title:** Doxygen CSS

|              |                        |
| ------------ | ---------------------- |
| **Type**     | `string`               |
| **Required** | No                     |
| **Default**  | `"new_stylesheet.css"` |

**Description:** The CSS file used to extend Doxygen

#### <a name="docConfig_doxyContent_path"></a>4.5.8. Property `SASjs Config File > docConfig > doxyContent > path`

**Title:** Doxygen Path

|              |                |
| ------------ | -------------- |
| **Type**     | `string`       |
| **Required** | No             |
| **Default**  | `"sasjs/doxy"` |

**Description:** The path to the Doxygen configuration files (relative to sasjs/sasjsconfig.json)

## <a name="httpsAgentOptions"></a>5. Property `SASjs Config File > httpsAgentOptions`

**Title:** httpsAgentOptions

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |

**Description:** Configure https agent by setting all supported attribute such as `key`, `cert`, `ca`, `rejectUnauthorized` and `requestCert`

**Example:** 

```json
{
    "allowInsecureRequests": false,
    "caPath": "path/to/caFile",
    "keyPath": "path/to/keyFile",
    "certPath": "path/to/certFile",
    "requestCert": false,
    "rejectUnauthorized": true
}
```

| Property                                                             | Pattern | Type    | Deprecated | Definition | Title/Description     |
| -------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | --------------------- |
| - [allowInsecureRequests](#httpsAgentOptions_allowInsecureRequests ) | No      | boolean | No         | -          | allowInsecureRequests |
| - [caPath](#httpsAgentOptions_caPath )                               | No      | string  | No         | -          | caPath                |
| - [keyFile](#httpsAgentOptions_keyFile )                             | No      | string  | No         | -          | keyFile               |
| - [certFile](#httpsAgentOptions_certFile )                           | No      | string  | No         | -          | certFile              |
| - [requestCert](#httpsAgentOptions_requestCert )                     | No      | boolean | No         | -          | requestCert           |
| - [rejectUnauthorized](#httpsAgentOptions_rejectUnauthorized )       | No      | boolean | No         | -          | rejectUnauthorized    |

### <a name="httpsAgentOptions_allowInsecureRequests"></a>5.1. Property `SASjs Config File > httpsAgentOptions > allowInsecureRequests`

**Title:** allowInsecureRequests

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `false`   |

**Description:** If you are having certificate errors connecting to SAS, that cannot be properly resolved, try setting this value to true. This option only has an effect if rejectUnauthorized is not present.

**Examples:** 

```json
true
```

```json
false
```

### <a name="httpsAgentOptions_caPath"></a>5.2. Property `SASjs Config File > httpsAgentOptions > caPath`

**Title:** caPath

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

**Description:** Optionally override the trusted CA certificates. Default is to trust the well-known CAs curated by Mozilla. Mozilla's CAs are completely replaced when CAs are explicitly specified using this option.

**Example:** 

```json
"path/to/caFile"
```

### <a name="httpsAgentOptions_keyFile"></a>5.3. Property `SASjs Config File > httpsAgentOptions > keyFile`

**Title:** keyFile

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

**Description:** Private keys in PEM format. PEM allows the option of private keys being encrypted. Encrypted keys will be decrypted with options.passphrase. Multiple keys using different algorithms can be provided either as an array of unencrypted key strings or buffers, or an array of objects in the form {pem: <string|buffer>[, passphrase: <string>]}. The object form can only occur in an array. object.passphrase is optional. Encrypted keys will be decrypted with object.passphrase if provided, or options.passphrase if it is not.

**Example:** 

```json
"path/to/keyFile"
```

### <a name="httpsAgentOptions_certFile"></a>5.4. Property `SASjs Config File > httpsAgentOptions > certFile`

**Title:** certFile

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

**Description:** Cert chains in PEM format. One cert chain should be provided per private key. Each cert chain should consist of the PEM formatted certificate for a provided private key, followed by the PEM formatted intermediate certificates (if any), in order, and not including the root CA (the root CA must be pre-known to the peer, see ca). When providing multiple cert chains, they do not have to be in the same order as their private keys in key. If the intermediate certificates are not provided, the peer will not be able to validate the certificate, and the handshake will fail.

**Example:** 

```json
"path/to/certFile"
```

### <a name="httpsAgentOptions_requestCert"></a>5.5. Property `SASjs Config File > httpsAgentOptions > requestCert`

**Title:** requestCert

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `false`   |

**Description:** If true the server will request a certificate from clients that connect and attempt to verify that certificate. Defaults to false.

**Examples:** 

```json
true
```

```json
false
```

### <a name="httpsAgentOptions_rejectUnauthorized"></a>5.6. Property `SASjs Config File > httpsAgentOptions > rejectUnauthorized`

**Title:** rejectUnauthorized

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `true`    |

**Description:** If true the server will reject any connection which is not authorized with the list of supplied CAs. This option only has an effect if requestCert is true.

**Examples:** 

```json
true
```

```json
false
```

## <a name="buildConfig"></a>6. Property `SASjs Config File > buildConfig`

**Title:** buildConfig

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |

**Description:** Dictates which files get compiled into the build program (.sas), used to deploy services into SAS 9 or Viya environments (without a client/secret). You may use this config to include build specific macros, programs or macro variables - which is run a single time, on deployment - for things like database creation, or exporting a SAS 9 SPK after service creation.

**Example:** 

```json
{
    "initProgram": "build/buildinit.sas",
    "termProgram": "build/buildterm.sas",
    "macroVars": {
        "name": "value",
        "numvar": "42"
    },
    "buildOutputFileName": "buildpack.sas",
    "buildOutputFolder": "sasjsbuild",
    "buildResultsFolder": "sasjsresults"
}
```

| Property                                                   | Pattern | Type   | Deprecated | Definition | Title/Description               |
| ---------------------------------------------------------- | ------- | ------ | ---------- | ---------- | ------------------------------- |
| - [buildOutputFileName](#buildConfig_buildOutputFileName ) | No      | string | No         | -          | buildOutputFileName             |
| - [buildOutputFolder](#buildConfig_buildOutputFolder )     | No      | string | No         | -          | buildOutputFolder               |
| - [buildResultsFolder](#buildConfig_buildResultsFolder )   | No      | string | No         | -          | buildResultsFolder              |
| - [initProgram](#buildConfig_initProgram )                 | No      | string | No         | -          | The buildConfig initProgram     |
| - [termProgram](#buildConfig_termProgram )                 | No      | string | No         | -          | The buildConfig termProgram     |
| - [macroVars](#buildConfig_macroVars )                     | No      | object | No         | -          | The buildConfig macro variables |

### <a name="buildConfig_buildOutputFileName"></a>6.1. Property `SASjs Config File > buildConfig > buildOutputFileName`

**Title:** buildOutputFileName

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

**Description:** The name of the generated .sas program, which can be used to deploy the app using only SAS Studio. By default, this will be the name of the target.

**Examples:** 

```json
"viya.sas"
```

```json
"sas9.sas"
```

### <a name="buildConfig_buildOutputFolder"></a>6.2. Property `SASjs Config File > buildConfig > buildOutputFolder`

**Title:** buildOutputFolder

|              |                |
| ------------ | -------------- |
| **Type**     | `string`       |
| **Required** | No             |
| **Default**  | `"sasjsbuild"` |

**Description:** The name of the folder containing the compiled output.  The `sasjs build` command will take all of the subfolders here as inputs to create the build pack.  By default this will be named `sasjsbuild`.

### <a name="buildConfig_buildResultsFolder"></a>6.3. Property `SASjs Config File > buildConfig > buildResultsFolder`

**Title:** buildResultsFolder

|              |                  |
| ------------ | ---------------- |
| **Type**     | `string`         |
| **Required** | No               |
| **Default**  | `"sasjsresults"` |

**Description:** The name of the folder containing the output (eg logs, ODS output) from `sasjs run`.  By default this will be named `sasjsresults`.

### <a name="buildConfig_initProgram"></a>6.4. Property `SASjs Config File > buildConfig > initProgram`

**Title:** The buildConfig initProgram

|              |                         |
| ------------ | ----------------------- |
| **Type**     | `string`                |
| **Required** | No                      |
| **Default**  | `"sasjs/buildinit.sas"` |

**Description:** The path to a .sas program that will be inserted at the start of the build .sas program (created when running `sasjs build`).

### <a name="buildConfig_termProgram"></a>6.5. Property `SASjs Config File > buildConfig > termProgram`

**Title:** The buildConfig termProgram

|              |                         |
| ------------ | ----------------------- |
| **Type**     | `string`                |
| **Required** | No                      |
| **Default**  | `"sasjs/buildterm.sas"` |

**Description:** The path to a .sas program that will be inserted at the end of the build .sas program (created when running `sasjs build`).

### <a name="buildConfig_macroVars"></a>6.6. Property `SASjs Config File > buildConfig > macroVars`

**Title:** The buildConfig macro variables

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** A series of name value pairs that will be turned into SAS macro variables in the build .sas program (generated when running `sasjs build`).  The example provided will generate sas code as follows:
```
%let name=value;
%let numvar=42;
```

**Example:** 

```json
{
    "name": "value",
    "numvar": "42"
}
```

## <a name="deployConfig"></a>7. Property `SASjs Config File > deployConfig`

**Title:** The deployConfig schema

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** The deployConfig object enables settings that relate to the deployment of a SAS app - be that Viya, or SAS 9, or a pure Base environment.

**Examples:** 

```json
{
    "deployScripts": [
        "build/deployscript.sh"
    ]
}
```

```json
{
    "deployScripts": [
        "build/deployscript.sh"
    ],
    "deployServicePack": true
}
```

| Property                                                | Pattern | Type    | Deprecated | Definition | Title/Description                       |
| ------------------------------------------------------- | ------- | ------- | ---------- | ---------- | --------------------------------------- |
| - [deployScripts](#deployConfig_deployScripts )         | No      | array   | No         | -          | The deployConfig deployScripts array    |
| - [deployServicePack](#deployConfig_deployServicePack ) | No      | boolean | No         | -          | The deployConfig deployServicePack flag |

### <a name="deployConfig_deployScripts"></a>7.1. Property `SASjs Config File > deployConfig > deployScripts`

**Title:** The deployConfig deployScripts array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |
| **Default**  | `[]`    |

**Description:** These scripts are executed when running `sasjs deploy`.  If the file is a .sas file, it is executed on the SAS server (Viya only).  Otherwise it is executed locally.  These scripts are run AFTER the deployment of the servicepack, if `deployServicePack:true` (Viya only).

**Example:** 

```json
[
    "build/deployscript.sh",
    "build/myprogram.sas"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

### <a name="deployConfig_deployServicePack"></a>7.2. Property `SASjs Config File > deployConfig > deployServicePack`

**Title:** The deployConfig deployServicePack flag

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `[false]` |

**Description:** If set to `true` the json pack produced by `sasjs build` will be auto-deployed to the `appLoc` of the specified target (creating all jobs and services in the SAS folder tree).  Currently only Viya is supported for this flag.

## <a name="serviceConfig"></a>8. Property `SASjs Config File > serviceConfig`

**Title:** The serviceConfig schema

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** The serviceConfig object defines how SASjs web services are compiled.  Web services differ from jobs in that they include some fixed pre-code (eg the macros to stream out the result json).

**Example:** 

```json
{
    "serviceFolders": [
        "services/common",
        "services/admin"
    ],
    "initProgram": "build/serviceinit.sas",
    "termProgram": "build/serviceterm.sas",
    "macroVars": {
        "mac1": "value",
        "mac2": "42"
    }
}
```

| Property                                           | Pattern | Type   | Deprecated | Definition | Title/Description                      |
| -------------------------------------------------- | ------- | ------ | ---------- | ---------- | -------------------------------------- |
| - [serviceFolders](#serviceConfig_serviceFolders ) | No      | array  | No         | -          | The serviceConfig serviceFolders array |
| - [initProgram](#serviceConfig_initProgram )       | No      | string | No         | -          | The serviceConfig initProgram          |
| - [termProgram](#serviceConfig_termProgram )       | No      | string | No         | -          | The serviceConfig termProgram          |
| - [macroVars](#serviceConfig_macroVars )           | No      | object | No         | -          | The \`serviceConfig\` macroVars        |

### <a name="serviceConfig_serviceFolders"></a>8.1. Property `SASjs Config File > serviceConfig > serviceFolders`

**Title:** The serviceConfig serviceFolders array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |
| **Default**  | `[]`    |

**Description:** When running `sasjs compile`, all programs in the folders defined in this array are compiled and placed into same-named folders under `sasjsbuild/services`.  They will be compiled as services (so, with the service pre-code).  Folders can be absolute, or relative to the `sasjs` folder.

**Example:** 

```json
[
    "services/common",
    "services/admin"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

### <a name="serviceConfig_initProgram"></a>8.2. Property `SASjs Config File > serviceConfig > initProgram`

**Title:** The serviceConfig initProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The serviceConfig `initProgram` is a .sas file that is inserted at the start of every SAS service (after compiled macros and any `macroVars`, and before the service itself). 

**Example:** 

```json
"build/serviceinit.sas"
```

### <a name="serviceConfig_termProgram"></a>8.3. Property `SASjs Config File > serviceConfig > termProgram`

**Title:** The serviceConfig termProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The serviceConfig termProgram is inserted at the end of every service as part of `sasjs compile`.

**Example:** 

```json
"build/serviceterm.sas"
```

### <a name="serviceConfig_macroVars"></a>8.4. Property `SASjs Config File > serviceConfig > macroVars`

**Title:** The `serviceConfig` macroVars

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** This object allows `sasjs compile` to insert specific macro variables at the start of every service.  In this case, the code generated would be:
```
%let mac1=value;
%let mac2=42;
```

**Example:** 

```json
{
    "mac1": "value",
    "mac2": "42"
}
```

## <a name="jobConfig"></a>9. Property `SASjs Config File > jobConfig`

**Title:** The jobConfig schema

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** The jobConfig object defines how SASjs Jobs are compiled. 

**Example:** 

```json
{
    "jobFolders": [
        "jobs/extract",
        "jobs/load"
    ],
    "initProgram": "jobs/jobinit.sas",
    "termProgram": "jobs/jobterm.sas",
    "macroVars": {
        "mac1": "value",
        "mac2": "42"
    }
}
```

| Property                                 | Pattern | Type   | Deprecated | Definition | Title/Description              |
| ---------------------------------------- | ------- | ------ | ---------- | ---------- | ------------------------------ |
| - [jobFolders](#jobConfig_jobFolders )   | No      | array  | No         | -          | The jobConfig jobFolders array |
| - [initProgram](#jobConfig_initProgram ) | No      | string | No         | -          | The jobConfig initProgram      |
| - [termProgram](#jobConfig_termProgram ) | No      | string | No         | -          | The jobConfig termProgram      |
| - [macroVars](#jobConfig_macroVars )     | No      | object | No         | -          | The \`jobConfig\` macroVars    |

### <a name="jobConfig_jobFolders"></a>9.1. Property `SASjs Config File > jobConfig > jobFolders`

**Title:** The jobConfig jobFolders array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |
| **Default**  | `[]`    |

**Description:** When running `sasjs compile`, all programs in the local folders defined in this array are compiled and placed into same-named folders under `sasjsbuild/jobs`. Folders can be absolute, or relative to the local project `/sasjs` folder.

**Example:** 

```json
[
    "jobs/extract",
    "jobs/transform",
    "jobs/load"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

### <a name="jobConfig_initProgram"></a>9.2. Property `SASjs Config File > jobConfig > initProgram`

**Title:** The jobConfig initProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The jobConfig `initProgram` is a local .sas file that is inserted at the start of every SAS Job (after compiled macros and any `macroVars`, and before the Job itself). 

**Example:** 

```json
"jobs/jobinit.sas"
```

### <a name="jobConfig_termProgram"></a>9.3. Property `SASjs Config File > jobConfig > termProgram`

**Title:** The jobConfig termProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The jobConfig termProgram is inserted at the end of every Job as part of `sasjs compile`.

**Example:** 

```json
"jobs/jobterm.sas"
```

### <a name="jobConfig_macroVars"></a>9.4. Property `SASjs Config File > jobConfig > macroVars`

**Title:** The `jobConfig` macroVars

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** This object allows `sasjs compile` to insert specific macro variables at the start of every Job.  In this case, the code generated would be:
```
%let mac1=value;
%let mac2=42;
```

**Example:** 

```json
{
    "mac1": "value",
    "mac2": "42"
}
```

## <a name="streamConfig"></a>10. Property `SASjs Config File > streamConfig`

**Title:** streamConfig

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** SASjs allows a local web app to be compiled such that all html, css, javascript, and other assets such as png or mp4 are converted into web services and streamed directly from SAS.

This approach is convenient as it bypasses the need to deploy to a web server. 

**Example:** 

```json
{
    "assetPaths": [],
    "streamWeb": false,
    "streamWebFolder": "webv",
    "webSourcePath": "dist",
    "streamLogo": "logo.png"
}
```

| Property                                                | Pattern | Type    | Deprecated | Definition | Title/Description                      |
| ------------------------------------------------------- | ------- | ------- | ---------- | ---------- | -------------------------------------- |
| - [assetPaths](#streamConfig_assetPaths )               | No      | array   | No         | -          | The streamConfig assetPaths array      |
| - [streamLogo](#streamConfig_streamLogo )               | No      | string  | No         | -          | Icon shown in AppStream (sasjs/server) |
| + [streamWeb](#streamConfig_streamWeb )                 | No      | boolean | No         | -          | The streamConfig streamWeb flag        |
| - [streamWebFolder](#streamConfig_streamWebFolder )     | No      | string  | No         | -          | The streamConfig streamWebFolder       |
| - [webSourcePath](#streamConfig_webSourcePath )         | No      | string  | No         | -          | The webSourcePath schema               |
| - [streamServiceName](#streamConfig_streamServiceName ) | No      | string  | No         | -          | streamServiceName Schema               |

### <a name="streamConfig_assetPaths"></a>10.1. Property `SASjs Config File > streamConfig > assetPaths`

**Title:** The streamConfig assetPaths array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |
| **Default**  | `[]`    |

**Description:** An array of local folders.  All assets placed in these folders are converted into web services - example file types could be png, svg, mp3, mp4, excel - anything really.

**Example:** 

```json
[
    "/myassets"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

### <a name="streamConfig_streamLogo"></a>10.2. Property `SASjs Config File > streamConfig > streamLogo`

**Title:** Icon shown in AppStream (sasjs/server)

|              |              |
| ------------ | ------------ |
| **Type**     | `string`     |
| **Required** | No           |
| **Default**  | `"logo.png"` |

**Description:** Provide the location of a square image, under the webSourcePath.  Used as the display icon on the appStream page.

**Examples:** 

```json
"logo.png"
```

```json
"favicon.ico"
```

### <a name="streamConfig_streamWeb"></a>10.3. Property `SASjs Config File > streamConfig > streamWeb`

**Title:** The streamConfig streamWeb flag

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |
| **Default**  | `false`   |

**Description:** When set to `true`, frontend files saved in the `webSourcePath` will be converted to streaming services in the `streamWebFolder` in SAS.

**Example:** 

```json
true
```

### <a name="streamConfig_streamWebFolder"></a>10.4. Property `SASjs Config File > streamConfig > streamWebFolder`

**Title:** The streamConfig streamWebFolder

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `"webv"` |

**Description:** This is the target SAS folder (relative to the appLoc) where the compiled web assets will be created.

### <a name="streamConfig_webSourcePath"></a>10.5. Property `SASjs Config File > streamConfig > webSourcePath`

**Title:** The webSourcePath schema

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `"dist"` |

**Description:** When `streamConfig` is set to `true`, all files in this folder will be converted to streaming web services.  The `index.html` will be taken as a baseline, and all relative URLS will be prefixed such that the links still work and the assets still load.

### <a name="streamConfig_streamServiceName"></a>10.6. Property `SASjs Config File > streamConfig > streamServiceName`

**Title:** streamServiceName Schema

|              |                 |
| ------------ | --------------- |
| **Type**     | `string`        |
| **Required** | No              |
| **Default**  | `"clickme.sas"` |

**Description:** The name of the service containing the `index.html` for a streaming web app.  Defaults to `clickme` and is always deployed under the appLoc/services SAS Folder.

## <a name="testConfig"></a>11. Property `SASjs Config File > testConfig`

**Title:** testConfig

|                           |                                                                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                                                                                                                                                                  |
| **Required**              | No                                                                                                                                                                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.")                                                                                                                                                 |
| **Default**               | `{"initProgram": "sasjs/tests/testinit.sas", "termProgram": "sasjs/tests/testterm.sas", "macroVars": {"testVar": "testValue"}, "testSetUp": "sasjs/tests/testsetup.sas", "testTearDown": "sasjs/tests/testteardown.sas"}` |

**Description:** Create tests for Macros, Services & Jobs by simply adding a '.test.sas' extension. 

| Property                                    | Pattern | Type   | Deprecated | Definition | Title/Description           |
| ------------------------------------------- | ------- | ------ | ---------- | ---------- | --------------------------- |
| - [initProgram](#testConfig_initProgram )   | No      | string | No         | -          | The jobConfig initProgram   |
| - [termProgram](#testConfig_termProgram )   | No      | string | No         | -          | The jobConfig termProgram   |
| - [macroVars](#testConfig_macroVars )       | No      | object | No         | -          | The \`jobConfig\` macroVars |
| - [testSetUp](#testConfig_testSetUp )       | No      | string | No         | -          | The jobConfig testSetUp     |
| - [testTearDown](#testConfig_testTearDown ) | No      | string | No         | -          | The jobConfig testTearDown  |

### <a name="testConfig_initProgram"></a>11.1. Property `SASjs Config File > testConfig > initProgram`

**Title:** The jobConfig initProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The testConfig `initProgram` is a local .sas file that is inserted at the start of every Test (after compiled macros and any `macroVars`, and before the Test itself). 

**Example:** 

```json
"sasjs/tests/testinit.sas"
```

### <a name="testConfig_termProgram"></a>11.2. Property `SASjs Config File > testConfig > termProgram`

**Title:** The jobConfig termProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The testConfig termProgram is inserted at the end of every Test as part of `sasjs compile`.

**Example:** 

```json
"jobs/jobterm.sas"
```

### <a name="testConfig_macroVars"></a>11.3. Property `SASjs Config File > testConfig > macroVars`

**Title:** The `jobConfig` macroVars

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** This object allows `sasjs compile` to insert specific macro variables at the start of every Test.  In this case, the code generated would be:
```
%let mac1=value;
%let mac2=42;
```

**Example:** 

```json
{
    "mac1": "value",
    "mac2": "42"
}
```

### <a name="testConfig_testSetUp"></a>11.4. Property `SASjs Config File > testConfig > testSetUp`

**Title:** The jobConfig testSetUp

|              |                               |
| ------------ | ----------------------------- |
| **Type**     | `string`                      |
| **Required** | No                            |
| **Default**  | `"sasjs/tests/testsetup.sas"` |

**Description:** This program is the first to execute as part of 'sasjs test'.  It does not contain the testInit, testTerm or macroVariables.  It IS compiled.

**Example:** 

```json
"sasjs/tests/testsetup.sas"
```

### <a name="testConfig_testTearDown"></a>11.5. Property `SASjs Config File > testConfig > testTearDown`

**Title:** The jobConfig testTearDown

|              |                                  |
| ------------ | -------------------------------- |
| **Type**     | `string`                         |
| **Required** | No                               |
| **Default**  | `"sasjs/tests/testteardown.sas"` |

**Description:** The last program to execute as part of 'sasjs test'.

**Example:** 

```json
"sasjs/tests/testteardown.sas"
```

## <a name="macroFolders"></a>12. Property `SASjs Config File > macroFolders`

**Title:** The macroFolders array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |
| **Default**  | `[]`    |

**Description:** These local folders are searched for SAS Macros when running `sasjs compile`.  Folders are relative to the `sasjs/sasjsconfig.json` file.

**Example:** 

```json
[
    "macros",
    "../../more_macros"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

## <a name="programFolders"></a>13. Property `SASjs Config File > programFolders`

**Title:** The programFolders array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |
| **Default**  | `[]`    |

**Description:** These local folders are searched for SAS Programs when running `sasjs compile`.  Folders are relative to the `sasjs/sasjsconfig.json` file.

**Example:** 

```json
[
    "programs",
    "../../more_programs"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

## <a name="syncFolder"></a>14. Property `SASjs Config File > syncFolder`

**Title:** Sync Folder

|              |                        |
| ------------ | ---------------------- |
| **Type**     | `string`               |
| **Required** | No                     |
| **Default**  | `"sasjs/static_files"` |

**Description:** The contents of this folder are simply copied to the sasjsbuild directory AFTER the rest of the project is compiled.  Useful for synchronising random / generic content with SAS logical folders.

## <a name="targets"></a>15. Property `SASjs Config File > targets`

**Title:** The targets array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |
| **Default**  | `[]`    |

**Description:** A target is an alias for a deployment location, and includes at a minimum, the `serverUrl`, `serverType` and `appLoc`.  This array allows multiple targets to be defined (eg dev / test / prod).  Any properties defined here will override same-named properties in the sasjsconfig root.

**Examples:** 

```json
[
    {
        "name": "sas9target",
        "serverType": "SAS9",
        "serverUrl": "https://mysas9server",
        "appLoc": "/Shared Folders/myApp"
    }
]
```

```json
[
    {
        "name": "viya",
        "serverType": "SASVIYA",
        "serverUrl": "https://sas.sasjs.com",
        "appLoc": "/Public/app",
        "contextName": "SAS Job Execution compute context",
        "buildConfig": {
            "buildOutputFileName": "myviyadeploy.sas",
            "initProgram": "build/buildinitviya.sas",
            "termProgram": "targets/viya/viyabuildterm.sas",
            "macroVars": {
                "name": "viyavalue",
                "extravar": "this too"
            }
        },
        "deployConfig": {
            "deployServicePack": true,
            "deployScripts": [
                "sasjsbuild/myviyadeploy.sas"
            ]
        },
        "serviceConfig": {
            "serviceFolders": [
                "targets/viya/services/admin"
            ],
            "initProgram": "build/serviceinit.sas",
            "termProgram": "build/serviceinit.sas",
            "macroVars": {
                "name": "viyavalue",
                "extravar": "this too"
            }
        },
        "streamConfig": {
            "assetPaths": [],
            "streamWeb": false,
            "streamWebFolder": "webv",
            "webSourcePath": "dist"
        },
        "testConfig": {
            "initProgram": "sasjs/tests/testinit.sas",
            "termProgram": "sasjs/tests/testterm.sas",
            "macroVars": {
                "testVar": "testValue"
            },
            "testSetUp": "sasjs/tests/testsetup.sas",
            "testTearDown": "sasjs/tests/testteardown.sas"
        },
        "macroFolders": [
            "targets/viya/macros"
        ]
    },
    {
        "name": "sas9",
        "serverType": "SAS9",
        "serverUrl": "https://sas.sasjs.com:7980",
        "appLoc": "/User Folders/&sysuserid/My Folder",
        "serverName": "Foundation",
        "repositoryName": "SASApp",
        "buildConfig": {
            "buildOutputFileName": "mysas9deploy.sas",
            "initProgram": "",
            "termProgram": "",
            "macroVars": {}
        },
        "deployConfig": {
            "deployScripts": [
                "build/deploysas9.sh"
            ],
            "deployServicePack": false
        },
        "serviceConfig": {
            "serviceFolders": [
                "targets/sas9/services/admin"
            ],
            "initProgram": "",
            "termProgram": "build/servicetermother.sas",
            "macroVars": {}
        },
        "streamConfig": {
            "assetPaths": [],
            "streamWeb": false,
            "streamWebFolder": "web9",
            "webSourcePath": "dist"
        },
        "testConfig": {
            "initProgram": "sasjs/tests/testinit.sas",
            "termProgram": "sasjs/tests/testterm.sas",
            "macroVars": {
                "testVar": "testValue"
            },
            "testSetUp": "sasjs/tests/testsetup.sas",
            "testTearDown": "sasjs/tests/testteardown.sas"
        },
        "macroFolders": [
            "targets/sas9/macros"
        ],
        "programFolders": []
    }
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be | Description |
| ------------------------------- | ----------- |
| [targets items](#targets_items) | -           |

### <a name="autogenerated_heading_2"></a>15.1. SASjs Config File > targets > targets items

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `combining`                                                               |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |

| Any of(Option)                           |
| ---------------------------------------- |
| [SASjs Targets](#targets_items_anyOf_i0) |

#### <a name="targets_items_anyOf_i0"></a>15.1.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets`

**Title:** SASjs Targets

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** A target provides the configuration specific to a particular deployment, eg DEV / TEST, or SAS9 / SASVIYA.

**Example:** 

```json
{
    "name": "viya",
    "serverType": "SASVIYA",
    "serverUrl": "https://sas.sasjs.com",
    "appLoc": "/Public/app",
    "contextName": "SAS Job Execution compute context",
    "buildConfig": {
        "buildOutputFileName": "myviyadeploy.sas",
        "initProgram": "build/buildinitviya.sas",
        "termProgram": "targets/viya/viyabuildterm.sas",
        "macroVars": {
            "name": "viyavalue",
            "extravar": "this too"
        }
    },
    "deployConfig": {
        "deployServicePack": true,
        "deployScripts": [
            "sasjsbuild/myviyadeploy.sas"
        ]
    },
    "serviceConfig": {
        "serviceFolders": [
            "targets/viya/services/admin"
        ],
        "initProgram": "build/serviceinit.sas",
        "termProgram": "build/serviceinit.sas",
        "macroVars": {
            "name": "viyavalue",
            "extravar": "this too"
        }
    },
    "jobConfig": {
        "jobFolders": [],
        "initProgram": "",
        "termProgram": "",
        "macroVars": {}
    },
    "streamConfig": {
        "assetPaths": [],
        "streamWeb": false,
        "streamWebFolder": "webv",
        "webSourcePath": "dist"
    },
    "testConfig": {
        "initProgram": "sasjs/tests/testinit.sas",
        "termProgram": "sasjs/tests/testterm.sas",
        "macroVars": {
            "testVar": "testValue"
        },
        "testSetUp": "sasjs/tests/testsetup.sas",
        "testTearDown": "sasjs/tests/testteardown.sas"
    },
    "macroFolders": [
        "targets/viya/macros"
    ],
    "programFolders": []
}
```

| Property                                                          | Pattern | Type   | Deprecated | Definition                        | Title/Description                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------- | ------- | ------ | ---------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| + [name](#targets_items_anyOf_i0_name )                           | No      | string | No         | -                                 | Target name property                                                                                                                                                                                                                                                                                                                                                        |
| + [serverType](#targets_items_anyOf_i0_serverType )               | No      | string | No         | -                                 | The Target serverType                                                                                                                                                                                                                                                                                                                                                       |
| + [appLoc](#targets_items_anyOf_i0_appLoc )                       | No      | string | No         | -                                 | The Target appLoc                                                                                                                                                                                                                                                                                                                                                           |
| - [binaryFolders](#targets_items_anyOf_i0_binaryFolders )         | No      | array  | No         | In #/properties/binaryFolders     | These local folders are searched for Binary Files when running sasjs compile.  Folders are relative to the sasjs/sasjsconfig.json file.                                                                                                                                                                                                                                     |
| - [buildConfig](#targets_items_anyOf_i0_buildConfig )             | No      | object | No         | In #/properties/buildConfig       | Dictates which files get compiled into the build program (.sas), used to deploy services into SAS 9 or Viya environments (without a client/secret). You may use this config to include build specific macros, programs or macro variables - which is run a single time, on deployment - for things like database creation, or exporting a SAS 9 SPK after service creation. |
| - [contextName](#targets_items_anyOf_i0_contextName )             | No      | string | No         | -                                 | The Target contextName                                                                                                                                                                                                                                                                                                                                                      |
| - [deployConfig](#targets_items_anyOf_i0_deployConfig )           | No      | object | No         | In #/properties/deployConfig      | The deployConfig object enables settings that relate to the deployment of a SAS app - be that Viya, or SAS 9, or a pure Base environment.                                                                                                                                                                                                                                   |
| - [httpsAgentOptions](#targets_items_anyOf_i0_httpsAgentOptions ) | No      | object | No         | In #/properties/httpsAgentOptions | Configure https agent by setting all supported attribute such as \`key\`, \`cert\`, \`ca\`, \`rejectUnauthorized\` and \`requestCert\`                                                                                                                                                                                                                                      |
| - [serverUrl](#targets_items_anyOf_i0_serverUrl )                 | No      | string | No         | -                                 | The Target serverUrl                                                                                                                                                                                                                                                                                                                                                        |
| - [serviceConfig](#targets_items_anyOf_i0_serviceConfig )         | No      | object | No         | In #/properties/serviceConfig     | The serviceConfig object defines how SASjs web services are compiled.  Web services differ from jobs in that they include some fixed pre-code (eg the macros to stream out the result json).                                                                                                                                                                                |
| - [jobConfig](#targets_items_anyOf_i0_jobConfig )                 | No      | object | No         | In #/properties/jobConfig         | The jobConfig object defines how SASjs Jobs are compiled.                                                                                                                                                                                                                                                                                                                   |
| - [docConfig](#targets_items_anyOf_i0_docConfig )                 | No      | object | No         | In #/properties/docConfig         | SASjs uses doxygen to auto-generate HTML documentation using the headers in your SAS programs, macros, services & jobs. For more info, see [https://cli.sasjs.io/doc](https://cli.sasjs.io/doc).  Some properties are taken from package.json (such as the project Name).                                                                                                   |
| - [streamConfig](#targets_items_anyOf_i0_streamConfig )           | No      | object | No         | In #/properties/streamConfig      | SASjs allows a local web app to be compiled such that all html, css, javascript, and other assets such as png or mp4 are converted into web services and streamed directly from SAS.<br /><br />This approach is convenient as it bypasses the need to deploy to a web server.                                                                                              |
| - [syncDirectories](#targets_items_anyOf_i0_syncDirectories )     | No      | array  | No         | -                                 | syncDirectories                                                                                                                                                                                                                                                                                                                                                             |
| - [syncFolder](#targets_items_anyOf_i0_syncFolder )               | No      | string | No         | In #/properties/syncFolder        | The contents of this folder are simply copied to the sasjsbuild directory AFTER the rest of the project is compiled.  Useful for synchronising random / generic content with SAS logical folders.                                                                                                                                                                           |
| - [testConfig](#targets_items_anyOf_i0_testConfig )               | No      | object | No         | In #/properties/testConfig        | Create tests for Macros, Services & Jobs by simply adding a '.test.sas' extension.                                                                                                                                                                                                                                                                                          |
| - [macroFolders](#targets_items_anyOf_i0_macroFolders )           | No      | array  | No         | In #/properties/macroFolders      | These local folders are searched for SAS Macros when running \`sasjs compile\`.  Folders are relative to the \`sasjs/sasjsconfig.json\` file.                                                                                                                                                                                                                               |
| - [programFolders](#targets_items_anyOf_i0_programFolders )       | No      | array  | No         | In #/properties/programFolders    | These local folders are searched for SAS Programs when running \`sasjs compile\`.  Folders are relative to the \`sasjs/sasjsconfig.json\` file.                                                                                                                                                                                                                             |

##### <a name="targets_items_anyOf_i0_name"></a>15.1.1.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > name`

**Title:** Target name property

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |
| **Default**  | `""`     |

**Description:** A target name can only contain alphanumeric characters and dashes.  It cannot contain spaces. It is used as the alias when referencing the target using the `-t` attribute in many of the SASjs commands.

**Example:** 

```json
"viya"
```

##### <a name="targets_items_anyOf_i0_serverType"></a>15.1.1.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serverType`

**Title:** The Target serverType

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |
| **Default**  | `""`     |

**Description:** The serverType can be either SAS9, SASVIYA or SASJS.

**Example:** 

```json
"SASVIYA"
```

##### <a name="targets_items_anyOf_i0_appLoc"></a>15.1.1.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > appLoc`

**Title:** The Target appLoc

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |
| **Default**  | `""`     |

**Description:** The appLoc provides the root SAS folder location under which all jobs and services are deployed and executed.  The SAS folder could be metadata in SAS 9, or SAS Drive in Viya. 

**Example:** 

```json
"/Public/app"
```

##### <a name="targets_items_anyOf_i0_binaryFolders"></a>15.1.1.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > binaryFolders`

|                |                            |
| -------------- | -------------------------- |
| **Type**       | `array`                    |
| **Required**   | No                         |
| **Defined in** | #/properties/binaryFolders |

**Description:** These local folders are searched for Binary Files when running sasjs compile.  Folders are relative to the sasjs/sasjsconfig.json file.

**Example:** 

```json
[
    "binaries",
    "../../more_binaries"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

##### <a name="targets_items_anyOf_i0_buildConfig"></a>15.1.1.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig`

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Defined in**            | #/properties/buildConfig                                                  |

**Description:** Dictates which files get compiled into the build program (.sas), used to deploy services into SAS 9 or Viya environments (without a client/secret). You may use this config to include build specific macros, programs or macro variables - which is run a single time, on deployment - for things like database creation, or exporting a SAS 9 SPK after service creation.

**Example:** 

```json
{
    "initProgram": "build/buildinit.sas",
    "termProgram": "build/buildterm.sas",
    "macroVars": {
        "name": "value",
        "numvar": "42"
    },
    "buildOutputFileName": "buildpack.sas",
    "buildOutputFolder": "sasjsbuild",
    "buildResultsFolder": "sasjsresults"
}
```

| Property                                                                          | Pattern | Type   | Deprecated | Definition | Title/Description               |
| --------------------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- | ------------------------------- |
| - [buildOutputFileName](#targets_items_anyOf_i0_buildConfig_buildOutputFileName ) | No      | string | No         | -          | buildOutputFileName             |
| - [buildOutputFolder](#targets_items_anyOf_i0_buildConfig_buildOutputFolder )     | No      | string | No         | -          | buildOutputFolder               |
| - [buildResultsFolder](#targets_items_anyOf_i0_buildConfig_buildResultsFolder )   | No      | string | No         | -          | buildResultsFolder              |
| - [initProgram](#targets_items_anyOf_i0_buildConfig_initProgram )                 | No      | string | No         | -          | The buildConfig initProgram     |
| - [termProgram](#targets_items_anyOf_i0_buildConfig_termProgram )                 | No      | string | No         | -          | The buildConfig termProgram     |
| - [macroVars](#targets_items_anyOf_i0_buildConfig_macroVars )                     | No      | object | No         | -          | The buildConfig macro variables |

##### <a name="targets_items_anyOf_i0_buildConfig_buildOutputFileName"></a>15.1.1.5.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > buildOutputFileName`

**Title:** buildOutputFileName

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

**Description:** The name of the generated .sas program, which can be used to deploy the app using only SAS Studio. By default, this will be the name of the target.

**Examples:** 

```json
"viya.sas"
```

```json
"sas9.sas"
```

##### <a name="targets_items_anyOf_i0_buildConfig_buildOutputFolder"></a>15.1.1.5.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > buildOutputFolder`

**Title:** buildOutputFolder

|              |                |
| ------------ | -------------- |
| **Type**     | `string`       |
| **Required** | No             |
| **Default**  | `"sasjsbuild"` |

**Description:** The name of the folder containing the compiled output.  The `sasjs build` command will take all of the subfolders here as inputs to create the build pack.  By default this will be named `sasjsbuild`.

##### <a name="targets_items_anyOf_i0_buildConfig_buildResultsFolder"></a>15.1.1.5.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > buildResultsFolder`

**Title:** buildResultsFolder

|              |                  |
| ------------ | ---------------- |
| **Type**     | `string`         |
| **Required** | No               |
| **Default**  | `"sasjsresults"` |

**Description:** The name of the folder containing the output (eg logs, ODS output) from `sasjs run`.  By default this will be named `sasjsresults`.

##### <a name="targets_items_anyOf_i0_buildConfig_initProgram"></a>15.1.1.5.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > initProgram`

**Title:** The buildConfig initProgram

|              |                         |
| ------------ | ----------------------- |
| **Type**     | `string`                |
| **Required** | No                      |
| **Default**  | `"sasjs/buildinit.sas"` |

**Description:** The path to a .sas program that will be inserted at the start of the build .sas program (created when running `sasjs build`).

##### <a name="targets_items_anyOf_i0_buildConfig_termProgram"></a>15.1.1.5.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > termProgram`

**Title:** The buildConfig termProgram

|              |                         |
| ------------ | ----------------------- |
| **Type**     | `string`                |
| **Required** | No                      |
| **Default**  | `"sasjs/buildterm.sas"` |

**Description:** The path to a .sas program that will be inserted at the end of the build .sas program (created when running `sasjs build`).

##### <a name="targets_items_anyOf_i0_buildConfig_macroVars"></a>15.1.1.5.6. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > buildConfig > macroVars`

**Title:** The buildConfig macro variables

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** A series of name value pairs that will be turned into SAS macro variables in the build .sas program (generated when running `sasjs build`).  The example provided will generate sas code as follows:
```
%let name=value;
%let numvar=42;
```

**Example:** 

```json
{
    "name": "value",
    "numvar": "42"
}
```

##### <a name="targets_items_anyOf_i0_contextName"></a>15.1.1.6. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > contextName`

**Title:** The Target contextName

|              |                                       |
| ------------ | ------------------------------------- |
| **Type**     | `string`                              |
| **Required** | No                                    |
| **Default**  | `"SAS Job Execution compute context"` |

**Description:** The name of the compute context used to execute SAS code.  The context determines the way in which the SAS session is spawned (eg user credentials, autoexec code, system options etc).
Contexts can be created / modified / deleted using the `sasjs context` command.

**Example:** 

```json
"SAS Job Execution compute context"
```

##### <a name="targets_items_anyOf_i0_deployConfig"></a>15.1.1.7. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > deployConfig`

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |
| **Defined in**            | #/properties/deployConfig                                                 |

**Description:** The deployConfig object enables settings that relate to the deployment of a SAS app - be that Viya, or SAS 9, or a pure Base environment.

**Examples:** 

```json
{
    "deployScripts": [
        "build/deployscript.sh"
    ]
}
```

```json
{
    "deployScripts": [
        "build/deployscript.sh"
    ],
    "deployServicePack": true
}
```

| Property                                                                       | Pattern | Type    | Deprecated | Definition | Title/Description                       |
| ------------------------------------------------------------------------------ | ------- | ------- | ---------- | ---------- | --------------------------------------- |
| - [deployScripts](#targets_items_anyOf_i0_deployConfig_deployScripts )         | No      | array   | No         | -          | The deployConfig deployScripts array    |
| - [deployServicePack](#targets_items_anyOf_i0_deployConfig_deployServicePack ) | No      | boolean | No         | -          | The deployConfig deployServicePack flag |

##### <a name="targets_items_anyOf_i0_deployConfig_deployScripts"></a>15.1.1.7.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > deployConfig > deployScripts`

**Title:** The deployConfig deployScripts array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |
| **Default**  | `[]`    |

**Description:** These scripts are executed when running `sasjs deploy`.  If the file is a .sas file, it is executed on the SAS server (Viya only).  Otherwise it is executed locally.  These scripts are run AFTER the deployment of the servicepack, if `deployServicePack:true` (Viya only).

**Example:** 

```json
[
    "build/deployscript.sh",
    "build/myprogram.sas"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

##### <a name="targets_items_anyOf_i0_deployConfig_deployServicePack"></a>15.1.1.7.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > deployConfig > deployServicePack`

**Title:** The deployConfig deployServicePack flag

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `[false]` |

**Description:** If set to `true` the json pack produced by `sasjs build` will be auto-deployed to the `appLoc` of the specified target (creating all jobs and services in the SAS folder tree).  Currently only Viya is supported for this flag.

##### <a name="targets_items_anyOf_i0_httpsAgentOptions"></a>15.1.1.8. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions`

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Defined in**            | #/properties/httpsAgentOptions                                            |

**Description:** Configure https agent by setting all supported attribute such as `key`, `cert`, `ca`, `rejectUnauthorized` and `requestCert`

**Example:** 

```json
{
    "allowInsecureRequests": false,
    "caPath": "path/to/caFile",
    "keyPath": "path/to/keyFile",
    "certPath": "path/to/certFile",
    "requestCert": false,
    "rejectUnauthorized": true
}
```

| Property                                                                                    | Pattern | Type    | Deprecated | Definition | Title/Description     |
| ------------------------------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | --------------------- |
| - [allowInsecureRequests](#targets_items_anyOf_i0_httpsAgentOptions_allowInsecureRequests ) | No      | boolean | No         | -          | allowInsecureRequests |
| - [caPath](#targets_items_anyOf_i0_httpsAgentOptions_caPath )                               | No      | string  | No         | -          | caPath                |
| - [keyFile](#targets_items_anyOf_i0_httpsAgentOptions_keyFile )                             | No      | string  | No         | -          | keyFile               |
| - [certFile](#targets_items_anyOf_i0_httpsAgentOptions_certFile )                           | No      | string  | No         | -          | certFile              |
| - [requestCert](#targets_items_anyOf_i0_httpsAgentOptions_requestCert )                     | No      | boolean | No         | -          | requestCert           |
| - [rejectUnauthorized](#targets_items_anyOf_i0_httpsAgentOptions_rejectUnauthorized )       | No      | boolean | No         | -          | rejectUnauthorized    |

##### <a name="targets_items_anyOf_i0_httpsAgentOptions_allowInsecureRequests"></a>15.1.1.8.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > allowInsecureRequests`

**Title:** allowInsecureRequests

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `false`   |

**Description:** If you are having certificate errors connecting to SAS, that cannot be properly resolved, try setting this value to true. This option only has an effect if rejectUnauthorized is not present.

**Examples:** 

```json
true
```

```json
false
```

##### <a name="targets_items_anyOf_i0_httpsAgentOptions_caPath"></a>15.1.1.8.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > caPath`

**Title:** caPath

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

**Description:** Optionally override the trusted CA certificates. Default is to trust the well-known CAs curated by Mozilla. Mozilla's CAs are completely replaced when CAs are explicitly specified using this option.

**Example:** 

```json
"path/to/caFile"
```

##### <a name="targets_items_anyOf_i0_httpsAgentOptions_keyFile"></a>15.1.1.8.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > keyFile`

**Title:** keyFile

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

**Description:** Private keys in PEM format. PEM allows the option of private keys being encrypted. Encrypted keys will be decrypted with options.passphrase. Multiple keys using different algorithms can be provided either as an array of unencrypted key strings or buffers, or an array of objects in the form {pem: <string|buffer>[, passphrase: <string>]}. The object form can only occur in an array. object.passphrase is optional. Encrypted keys will be decrypted with object.passphrase if provided, or options.passphrase if it is not.

**Example:** 

```json
"path/to/keyFile"
```

##### <a name="targets_items_anyOf_i0_httpsAgentOptions_certFile"></a>15.1.1.8.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > certFile`

**Title:** certFile

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

**Description:** Cert chains in PEM format. One cert chain should be provided per private key. Each cert chain should consist of the PEM formatted certificate for a provided private key, followed by the PEM formatted intermediate certificates (if any), in order, and not including the root CA (the root CA must be pre-known to the peer, see ca). When providing multiple cert chains, they do not have to be in the same order as their private keys in key. If the intermediate certificates are not provided, the peer will not be able to validate the certificate, and the handshake will fail.

**Example:** 

```json
"path/to/certFile"
```

##### <a name="targets_items_anyOf_i0_httpsAgentOptions_requestCert"></a>15.1.1.8.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > requestCert`

**Title:** requestCert

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `false`   |

**Description:** If true the server will request a certificate from clients that connect and attempt to verify that certificate. Defaults to false.

**Examples:** 

```json
true
```

```json
false
```

##### <a name="targets_items_anyOf_i0_httpsAgentOptions_rejectUnauthorized"></a>15.1.1.8.6. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > httpsAgentOptions > rejectUnauthorized`

**Title:** rejectUnauthorized

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `true`    |

**Description:** If true the server will reject any connection which is not authorized with the list of supplied CAs. This option only has an effect if requestCert is true.

**Examples:** 

```json
true
```

```json
false
```

##### <a name="targets_items_anyOf_i0_serverUrl"></a>15.1.1.9. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serverUrl`

**Title:** The Target serverUrl

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The serverUrl is the location to which the app is deployed, and against which any server based operations are performed.  If SAS is served from a particular port, that port should also be included here.

**Examples:** 

```json
"https://sas.sasjs.com"
```

```json
"https://sas.sasjs.com:8080"
```

##### <a name="targets_items_anyOf_i0_serviceConfig"></a>15.1.1.10. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serviceConfig`

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |
| **Defined in**            | #/properties/serviceConfig                                                |

**Description:** The serviceConfig object defines how SASjs web services are compiled.  Web services differ from jobs in that they include some fixed pre-code (eg the macros to stream out the result json).

**Example:** 

```json
{
    "serviceFolders": [
        "services/common",
        "services/admin"
    ],
    "initProgram": "build/serviceinit.sas",
    "termProgram": "build/serviceterm.sas",
    "macroVars": {
        "mac1": "value",
        "mac2": "42"
    }
}
```

| Property                                                                  | Pattern | Type   | Deprecated | Definition | Title/Description                      |
| ------------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- | -------------------------------------- |
| - [serviceFolders](#targets_items_anyOf_i0_serviceConfig_serviceFolders ) | No      | array  | No         | -          | The serviceConfig serviceFolders array |
| - [initProgram](#targets_items_anyOf_i0_serviceConfig_initProgram )       | No      | string | No         | -          | The serviceConfig initProgram          |
| - [termProgram](#targets_items_anyOf_i0_serviceConfig_termProgram )       | No      | string | No         | -          | The serviceConfig termProgram          |
| - [macroVars](#targets_items_anyOf_i0_serviceConfig_macroVars )           | No      | object | No         | -          | The \`serviceConfig\` macroVars        |

##### <a name="targets_items_anyOf_i0_serviceConfig_serviceFolders"></a>15.1.1.10.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serviceConfig > serviceFolders`

**Title:** The serviceConfig serviceFolders array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |
| **Default**  | `[]`    |

**Description:** When running `sasjs compile`, all programs in the folders defined in this array are compiled and placed into same-named folders under `sasjsbuild/services`.  They will be compiled as services (so, with the service pre-code).  Folders can be absolute, or relative to the `sasjs` folder.

**Example:** 

```json
[
    "services/common",
    "services/admin"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

##### <a name="targets_items_anyOf_i0_serviceConfig_initProgram"></a>15.1.1.10.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serviceConfig > initProgram`

**Title:** The serviceConfig initProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The serviceConfig `initProgram` is a .sas file that is inserted at the start of every SAS service (after compiled macros and any `macroVars`, and before the service itself). 

**Example:** 

```json
"build/serviceinit.sas"
```

##### <a name="targets_items_anyOf_i0_serviceConfig_termProgram"></a>15.1.1.10.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serviceConfig > termProgram`

**Title:** The serviceConfig termProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The serviceConfig termProgram is inserted at the end of every service as part of `sasjs compile`.

**Example:** 

```json
"build/serviceterm.sas"
```

##### <a name="targets_items_anyOf_i0_serviceConfig_macroVars"></a>15.1.1.10.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > serviceConfig > macroVars`

**Title:** The `serviceConfig` macroVars

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** This object allows `sasjs compile` to insert specific macro variables at the start of every service.  In this case, the code generated would be:
```
%let mac1=value;
%let mac2=42;
```

**Example:** 

```json
{
    "mac1": "value",
    "mac2": "42"
}
```

##### <a name="targets_items_anyOf_i0_jobConfig"></a>15.1.1.11. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > jobConfig`

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |
| **Defined in**            | #/properties/jobConfig                                                    |

**Description:** The jobConfig object defines how SASjs Jobs are compiled. 

**Example:** 

```json
{
    "jobFolders": [
        "jobs/extract",
        "jobs/load"
    ],
    "initProgram": "jobs/jobinit.sas",
    "termProgram": "jobs/jobterm.sas",
    "macroVars": {
        "mac1": "value",
        "mac2": "42"
    }
}
```

| Property                                                        | Pattern | Type   | Deprecated | Definition | Title/Description              |
| --------------------------------------------------------------- | ------- | ------ | ---------- | ---------- | ------------------------------ |
| - [jobFolders](#targets_items_anyOf_i0_jobConfig_jobFolders )   | No      | array  | No         | -          | The jobConfig jobFolders array |
| - [initProgram](#targets_items_anyOf_i0_jobConfig_initProgram ) | No      | string | No         | -          | The jobConfig initProgram      |
| - [termProgram](#targets_items_anyOf_i0_jobConfig_termProgram ) | No      | string | No         | -          | The jobConfig termProgram      |
| - [macroVars](#targets_items_anyOf_i0_jobConfig_macroVars )     | No      | object | No         | -          | The \`jobConfig\` macroVars    |

##### <a name="targets_items_anyOf_i0_jobConfig_jobFolders"></a>15.1.1.11.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > jobConfig > jobFolders`

**Title:** The jobConfig jobFolders array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |
| **Default**  | `[]`    |

**Description:** When running `sasjs compile`, all programs in the local folders defined in this array are compiled and placed into same-named folders under `sasjsbuild/jobs`. Folders can be absolute, or relative to the local project `/sasjs` folder.

**Example:** 

```json
[
    "jobs/extract",
    "jobs/transform",
    "jobs/load"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

##### <a name="targets_items_anyOf_i0_jobConfig_initProgram"></a>15.1.1.11.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > jobConfig > initProgram`

**Title:** The jobConfig initProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The jobConfig `initProgram` is a local .sas file that is inserted at the start of every SAS Job (after compiled macros and any `macroVars`, and before the Job itself). 

**Example:** 

```json
"jobs/jobinit.sas"
```

##### <a name="targets_items_anyOf_i0_jobConfig_termProgram"></a>15.1.1.11.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > jobConfig > termProgram`

**Title:** The jobConfig termProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The jobConfig termProgram is inserted at the end of every Job as part of `sasjs compile`.

**Example:** 

```json
"jobs/jobterm.sas"
```

##### <a name="targets_items_anyOf_i0_jobConfig_macroVars"></a>15.1.1.11.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > jobConfig > macroVars`

**Title:** The `jobConfig` macroVars

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** This object allows `sasjs compile` to insert specific macro variables at the start of every Job.  In this case, the code generated would be:
```
%let mac1=value;
%let mac2=42;
```

**Example:** 

```json
{
    "mac1": "value",
    "mac2": "42"
}
```

##### <a name="targets_items_anyOf_i0_docConfig"></a>15.1.1.12. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig`

|                           |                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                                                                                     |
| **Required**              | No                                                                                                                                           |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.")                                                                    |
| **Default**               | `{"dataControllerUrl": "https://mysasserver.com/web/datacontroller/#", "enableLineage": true, "doxyContent": {"readMe": "../../README.md"}}` |
| **Defined in**            | #/properties/docConfig                                                                                                                       |

**Description:** SASjs uses doxygen to auto-generate HTML documentation using the headers in your SAS programs, macros, services & jobs. For more info, see [https://cli.sasjs.io/doc](https://cli.sasjs.io/doc).  Some properties are taken from package.json (such as the project Name).

**Example:** 

```json
{
    "displayMacroCore": true,
    "outDirectory": "/some/output/directory",
    "dataControllerUrl": "https://mysasserver.com/web/datacontroller/#",
    "enableLineage": true,
    "doxyContent": {
        "readMe": "../../my/custom/homepage.md",
        "path": "my/custom/doxy/folder"
    }
}
```

| Property                                                                    | Pattern | Type    | Deprecated | Definition | Title/Description                      |
| --------------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | -------------------------------------- |
| - [displayMacroCore](#targets_items_anyOf_i0_docConfig_displayMacroCore )   | No      | boolean | No         | -          | The displayMacroCore docConfig option  |
| - [outDirectory](#targets_items_anyOf_i0_docConfig_outDirectory )           | No      | string  | No         | -          | The outDirectory docConfig option      |
| - [dataControllerUrl](#targets_items_anyOf_i0_docConfig_dataControllerUrl ) | No      | string  | No         | -          | The dataControllerUrl docConfig option |
| - [enableLineage](#targets_items_anyOf_i0_docConfig_enableLineage )         | No      | boolean | No         | -          | Enable Lineage                         |
| - [doxyContent](#targets_items_anyOf_i0_docConfig_doxyContent )             | No      | object  | No         | -          | doxyContent                            |

##### <a name="targets_items_anyOf_i0_docConfig_displayMacroCore"></a>15.1.1.12.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > displayMacroCore`

**Title:** The displayMacroCore docConfig option

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `true`    |

**Description:** The CLI will autocompile macro dependencies that exist in the SASjs Macro Core library.  These will also show in the documentation under 'node_modules'.  If you'd prefer not to show these in the rendered docs, set this value to false.

**Example:** 

```json
true
```

##### <a name="targets_items_anyOf_i0_docConfig_outDirectory"></a>15.1.1.12.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > outDirectory`

**Title:** The outDirectory docConfig option

|              |                    |
| ------------ | ------------------ |
| **Type**     | `string`           |
| **Required** | No                 |
| **Default**  | `"sasjsbuild/doc"` |

**Description:** The location to which the generated HTML SAS documentation is written.  If missing, or left blank, the files will be written to the `sasjsbuild/doc` directory (default behaviour).

**Example:** 

```json
"/my/preferred/docs/directory"
```

##### <a name="targets_items_anyOf_i0_docConfig_dataControllerUrl"></a>15.1.1.12.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > dataControllerUrl`

**Title:** The dataControllerUrl docConfig option

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** Provide the full URL to Data Controller so that `sasjs doc` can link the lineage diagram directly to the table viewer in [Data Controller](https://datacontroller.io).
If left blank, or undefined, no links will be generated.

**Example:** 

```json
"https://yourserver.co.uk/dcviya/#"
```

##### <a name="targets_items_anyOf_i0_docConfig_enableLineage"></a>15.1.1.12.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > enableLineage`

**Title:** Enable Lineage

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |
| **Default**  | `true`    |

**Description:** If true, sasjs doc will generate and display Data Lineage from Jobs and Services.

##### <a name="targets_items_anyOf_i0_docConfig_doxyContent"></a>15.1.1.12.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent`

**Title:** doxyContent

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** Configuration of the Doxyfile variables

**Example:** 

```json
{
    "favIcon": "favicon.ico",
    "footer": "new_footer.html",
    "header": "new_header.html",
    "layout": "DoxygenLayout.xml",
    "logo": "logo.png",
    "readMe": "../../README.md",
    "stylesheet": "new_stylesheet.css",
    "path": "sasjs/doxy"
}
```

| Property                                                                  | Pattern | Type   | Deprecated | Definition | Title/Description       |
| ------------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- | ----------------------- |
| - [favIcon](#targets_items_anyOf_i0_docConfig_doxyContent_favIcon )       | No      | string | No         | -          | Doxygen favicon         |
| - [footer](#targets_items_anyOf_i0_docConfig_doxyContent_footer )         | No      | string | No         | -          | Doxygen footer          |
| - [header](#targets_items_anyOf_i0_docConfig_doxyContent_header )         | No      | string | No         | -          | Doxygen header          |
| - [layout](#targets_items_anyOf_i0_docConfig_doxyContent_layout )         | No      | string | No         | -          | Doxygen Layout XML File |
| - [logo](#targets_items_anyOf_i0_docConfig_doxyContent_logo )             | No      | string | No         | -          | Doxygen Logo            |
| - [readMe](#targets_items_anyOf_i0_docConfig_doxyContent_readMe )         | No      | string | No         | -          | Doxygen Homepage        |
| - [stylesheet](#targets_items_anyOf_i0_docConfig_doxyContent_stylesheet ) | No      | string | No         | -          | Doxygen CSS             |
| - [path](#targets_items_anyOf_i0_docConfig_doxyContent_path )             | No      | string | No         | -          | Doxygen Path            |

##### <a name="targets_items_anyOf_i0_docConfig_doxyContent_favIcon"></a>15.1.1.12.5.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > favIcon`

**Title:** Doxygen favicon

|              |                 |
| ------------ | --------------- |
| **Type**     | `string`        |
| **Required** | No              |
| **Default**  | `"favicon.ico"` |

**Description:** The favicon used in the doxygen documentation

##### <a name="targets_items_anyOf_i0_docConfig_doxyContent_footer"></a>15.1.1.12.5.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > footer`

**Title:** Doxygen footer

|              |                     |
| ------------ | ------------------- |
| **Type**     | `string`            |
| **Required** | No                  |
| **Default**  | `"new_footer.html"` |

**Description:** The footer HTML file used in the doxygen documentation

##### <a name="targets_items_anyOf_i0_docConfig_doxyContent_header"></a>15.1.1.12.5.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > header`

**Title:** Doxygen header

|              |                     |
| ------------ | ------------------- |
| **Type**     | `string`            |
| **Required** | No                  |
| **Default**  | `"new_header.html"` |

**Description:** The header HTML file used in the doxygen documentation

##### <a name="targets_items_anyOf_i0_docConfig_doxyContent_layout"></a>15.1.1.12.5.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > layout`

**Title:** Doxygen Layout XML File

|              |                       |
| ------------ | --------------------- |
| **Type**     | `string`              |
| **Required** | No                    |
| **Default**  | `"DoxygenLayout.xml"` |

**Description:** The layout XML file used to build the doxygen documentation

##### <a name="targets_items_anyOf_i0_docConfig_doxyContent_logo"></a>15.1.1.12.5.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > logo`

**Title:** Doxygen Logo

|              |              |
| ------------ | ------------ |
| **Type**     | `string`     |
| **Required** | No           |
| **Default**  | `"logo.png"` |

**Description:** The logo file used by doxygen

##### <a name="targets_items_anyOf_i0_docConfig_doxyContent_readMe"></a>15.1.1.12.5.6. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > readMe`

**Title:** Doxygen Homepage

|              |                     |
| ------------ | ------------------- |
| **Type**     | `string`            |
| **Required** | No                  |
| **Default**  | `"../../README.md"` |

**Description:** The file used to generate the doxygen homepage (defaults to the readme.md)

##### <a name="targets_items_anyOf_i0_docConfig_doxyContent_stylesheet"></a>15.1.1.12.5.7. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > stylesheet`

**Title:** Doxygen CSS

|              |                        |
| ------------ | ---------------------- |
| **Type**     | `string`               |
| **Required** | No                     |
| **Default**  | `"new_stylesheet.css"` |

**Description:** The CSS file used to extend Doxygen

##### <a name="targets_items_anyOf_i0_docConfig_doxyContent_path"></a>15.1.1.12.5.8. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > docConfig > doxyContent > path`

**Title:** Doxygen Path

|              |                |
| ------------ | -------------- |
| **Type**     | `string`       |
| **Required** | No             |
| **Default**  | `"sasjs/doxy"` |

**Description:** The path to the Doxygen configuration files (relative to sasjs/sasjsconfig.json)

##### <a name="targets_items_anyOf_i0_streamConfig"></a>15.1.1.13. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig`

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |
| **Defined in**            | #/properties/streamConfig                                                 |

**Description:** SASjs allows a local web app to be compiled such that all html, css, javascript, and other assets such as png or mp4 are converted into web services and streamed directly from SAS.

This approach is convenient as it bypasses the need to deploy to a web server. 

**Example:** 

```json
{
    "assetPaths": [],
    "streamWeb": false,
    "streamWebFolder": "webv",
    "webSourcePath": "dist",
    "streamLogo": "logo.png"
}
```

| Property                                                                       | Pattern | Type    | Deprecated | Definition | Title/Description                      |
| ------------------------------------------------------------------------------ | ------- | ------- | ---------- | ---------- | -------------------------------------- |
| - [assetPaths](#targets_items_anyOf_i0_streamConfig_assetPaths )               | No      | array   | No         | -          | The streamConfig assetPaths array      |
| - [streamLogo](#targets_items_anyOf_i0_streamConfig_streamLogo )               | No      | string  | No         | -          | Icon shown in AppStream (sasjs/server) |
| + [streamWeb](#targets_items_anyOf_i0_streamConfig_streamWeb )                 | No      | boolean | No         | -          | The streamConfig streamWeb flag        |
| - [streamWebFolder](#targets_items_anyOf_i0_streamConfig_streamWebFolder )     | No      | string  | No         | -          | The streamConfig streamWebFolder       |
| - [webSourcePath](#targets_items_anyOf_i0_streamConfig_webSourcePath )         | No      | string  | No         | -          | The webSourcePath schema               |
| - [streamServiceName](#targets_items_anyOf_i0_streamConfig_streamServiceName ) | No      | string  | No         | -          | streamServiceName Schema               |

##### <a name="targets_items_anyOf_i0_streamConfig_assetPaths"></a>15.1.1.13.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > assetPaths`

**Title:** The streamConfig assetPaths array

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |
| **Default**  | `[]`    |

**Description:** An array of local folders.  All assets placed in these folders are converted into web services - example file types could be png, svg, mp3, mp4, excel - anything really.

**Example:** 

```json
[
    "/myassets"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

##### <a name="targets_items_anyOf_i0_streamConfig_streamLogo"></a>15.1.1.13.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > streamLogo`

**Title:** Icon shown in AppStream (sasjs/server)

|              |              |
| ------------ | ------------ |
| **Type**     | `string`     |
| **Required** | No           |
| **Default**  | `"logo.png"` |

**Description:** Provide the location of a square image, under the webSourcePath.  Used as the display icon on the appStream page.

**Examples:** 

```json
"logo.png"
```

```json
"favicon.ico"
```

##### <a name="targets_items_anyOf_i0_streamConfig_streamWeb"></a>15.1.1.13.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > streamWeb`

**Title:** The streamConfig streamWeb flag

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |
| **Default**  | `false`   |

**Description:** When set to `true`, frontend files saved in the `webSourcePath` will be converted to streaming services in the `streamWebFolder` in SAS.

**Example:** 

```json
true
```

##### <a name="targets_items_anyOf_i0_streamConfig_streamWebFolder"></a>15.1.1.13.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > streamWebFolder`

**Title:** The streamConfig streamWebFolder

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `"webv"` |

**Description:** This is the target SAS folder (relative to the appLoc) where the compiled web assets will be created.

##### <a name="targets_items_anyOf_i0_streamConfig_webSourcePath"></a>15.1.1.13.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > webSourcePath`

**Title:** The webSourcePath schema

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `"dist"` |

**Description:** When `streamConfig` is set to `true`, all files in this folder will be converted to streaming web services.  The `index.html` will be taken as a baseline, and all relative URLS will be prefixed such that the links still work and the assets still load.

##### <a name="targets_items_anyOf_i0_streamConfig_streamServiceName"></a>15.1.1.13.6. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > streamConfig > streamServiceName`

**Title:** streamServiceName Schema

|              |                 |
| ------------ | --------------- |
| **Type**     | `string`        |
| **Required** | No              |
| **Default**  | `"clickme.sas"` |

**Description:** The name of the service containing the `index.html` for a streaming web app.  Defaults to `clickme` and is always deployed under the appLoc/services SAS Folder.

##### <a name="targets_items_anyOf_i0_syncDirectories"></a>15.1.1.14. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > syncDirectories`

**Title:** syncDirectories

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |

**Description:** Maps the local filesystem to remote (SAS) physical directories.

**Example:** 

```json
[
    {
        "local": "C:\\temp\\local\\fs1",
        "remote": "/opt/data/fs1"
    },
    {
        "local": "C:\\temp\\elsewhere",
        "remote": "/opt/somewhere"
    }
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

##### <a name="targets_items_anyOf_i0_syncFolder"></a>15.1.1.15. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > syncFolder`

|                |                         |
| -------------- | ----------------------- |
| **Type**       | `string`                |
| **Required**   | No                      |
| **Default**    | `"sasjs/static_files"`  |
| **Defined in** | #/properties/syncFolder |

**Description:** The contents of this folder are simply copied to the sasjsbuild directory AFTER the rest of the project is compiled.  Useful for synchronising random / generic content with SAS logical folders.

##### <a name="targets_items_anyOf_i0_testConfig"></a>15.1.1.16. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig`

|                           |                                                                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                                                                                                                                                                  |
| **Required**              | No                                                                                                                                                                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.")                                                                                                                                                 |
| **Default**               | `{"initProgram": "sasjs/tests/testinit.sas", "termProgram": "sasjs/tests/testterm.sas", "macroVars": {"testVar": "testValue"}, "testSetUp": "sasjs/tests/testsetup.sas", "testTearDown": "sasjs/tests/testteardown.sas"}` |
| **Defined in**            | #/properties/testConfig                                                                                                                                                                                                   |

**Description:** Create tests for Macros, Services & Jobs by simply adding a '.test.sas' extension. 

| Property                                                           | Pattern | Type   | Deprecated | Definition | Title/Description           |
| ------------------------------------------------------------------ | ------- | ------ | ---------- | ---------- | --------------------------- |
| - [initProgram](#targets_items_anyOf_i0_testConfig_initProgram )   | No      | string | No         | -          | The jobConfig initProgram   |
| - [termProgram](#targets_items_anyOf_i0_testConfig_termProgram )   | No      | string | No         | -          | The jobConfig termProgram   |
| - [macroVars](#targets_items_anyOf_i0_testConfig_macroVars )       | No      | object | No         | -          | The \`jobConfig\` macroVars |
| - [testSetUp](#targets_items_anyOf_i0_testConfig_testSetUp )       | No      | string | No         | -          | The jobConfig testSetUp     |
| - [testTearDown](#targets_items_anyOf_i0_testConfig_testTearDown ) | No      | string | No         | -          | The jobConfig testTearDown  |

##### <a name="targets_items_anyOf_i0_testConfig_initProgram"></a>15.1.1.16.1. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig > initProgram`

**Title:** The jobConfig initProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The testConfig `initProgram` is a local .sas file that is inserted at the start of every Test (after compiled macros and any `macroVars`, and before the Test itself). 

**Example:** 

```json
"sasjs/tests/testinit.sas"
```

##### <a name="targets_items_anyOf_i0_testConfig_termProgram"></a>15.1.1.16.2. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig > termProgram`

**Title:** The jobConfig termProgram

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Default**  | `""`     |

**Description:** The testConfig termProgram is inserted at the end of every Test as part of `sasjs compile`.

**Example:** 

```json
"jobs/jobterm.sas"
```

##### <a name="targets_items_anyOf_i0_testConfig_macroVars"></a>15.1.1.16.3. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig > macroVars`

**Title:** The `jobConfig` macroVars

|                           |                                                                           |
| ------------------------- | ------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                  |
| **Required**              | No                                                                        |
| **Additional properties** | [[Any type: allowed]](# "Additional Properties of any type are allowed.") |
| **Default**               | `{}`                                                                      |

**Description:** This object allows `sasjs compile` to insert specific macro variables at the start of every Test.  In this case, the code generated would be:
```
%let mac1=value;
%let mac2=42;
```

**Example:** 

```json
{
    "mac1": "value",
    "mac2": "42"
}
```

##### <a name="targets_items_anyOf_i0_testConfig_testSetUp"></a>15.1.1.16.4. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig > testSetUp`

**Title:** The jobConfig testSetUp

|              |                               |
| ------------ | ----------------------------- |
| **Type**     | `string`                      |
| **Required** | No                            |
| **Default**  | `"sasjs/tests/testsetup.sas"` |

**Description:** This program is the first to execute as part of 'sasjs test'.  It does not contain the testInit, testTerm or macroVariables.  It IS compiled.

**Example:** 

```json
"sasjs/tests/testsetup.sas"
```

##### <a name="targets_items_anyOf_i0_testConfig_testTearDown"></a>15.1.1.16.5. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > testConfig > testTearDown`

**Title:** The jobConfig testTearDown

|              |                                  |
| ------------ | -------------------------------- |
| **Type**     | `string`                         |
| **Required** | No                               |
| **Default**  | `"sasjs/tests/testteardown.sas"` |

**Description:** The last program to execute as part of 'sasjs test'.

**Example:** 

```json
"sasjs/tests/testteardown.sas"
```

##### <a name="targets_items_anyOf_i0_macroFolders"></a>15.1.1.17. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > macroFolders`

|                |                           |
| -------------- | ------------------------- |
| **Type**       | `array`                   |
| **Required**   | No                        |
| **Default**    | `[]`                      |
| **Defined in** | #/properties/macroFolders |

**Description:** These local folders are searched for SAS Macros when running `sasjs compile`.  Folders are relative to the `sasjs/sasjsconfig.json` file.

**Example:** 

```json
[
    "macros",
    "../../more_macros"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

##### <a name="targets_items_anyOf_i0_programFolders"></a>15.1.1.18. Property `SASjs Config File > targets > targets items > anyOf > SASjs Targets > programFolders`

|                |                             |
| -------------- | --------------------------- |
| **Type**       | `array`                     |
| **Required**   | No                          |
| **Default**    | `[]`                        |
| **Defined in** | #/properties/programFolders |

**Description:** These local folders are searched for SAS Programs when running `sasjs compile`.  Folders are relative to the `sasjs/sasjsconfig.json` file.

**Example:** 

```json
[
    "programs",
    "../../more_programs"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

----------------------------------------------------------------------------------------------------------------------------
Generated using [json-schema-for-humans](https://github.com/coveooss/json-schema-for-humans) on 2022-10-26 at 13:50:41 +0000

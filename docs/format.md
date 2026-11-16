---
layout: article
title: sasjs format
og_title: Rewrite SAS code into one canonical layout, and gate a pipeline on it
description: Reprint with the SAS language engine and then apply the project's SASjs Lint rules, so indentation, statement breaks and keyword case stop depending on who typed the file - with a --check mode for CI.
---

# sasjs format

`sasjs format` rewrites `.sas` files into the project's canonical form. Two passes, in this order:

1. the SAS language engine reprints the file - indentation, statement breaks and keyword case;
2. the rules in `.sasjslint` then run over its output - doxygen header, line wrapping, trailing space, line endings.

That order is `@sasjs/lint`'s and is deliberate: a rule that wraps or trims has to see the lines the printer produced, so applying the rules first and reprinting afterwards would undo both.

The second pass is what makes the output independent of how the file was typed. Prettier, gofmt and `cargo fmt` do the same job for their languages; this is the SAS equivalent.

## How it differs from `sasjs lint fix`

[`sasjs lint fix`](/lint) repairs what a lint rule can prove is wrong: a missing header, a trailing space, a macro named in lower case, and - once `lineEndings` names one - a CRLF line ending. A rule may only change the lines its own diagnostic points at, so it never re-indents code or splits a statement.

`sasjs format` lays the file out and then runs those same rules over the result. So:

```
before                 sasjs lint fix         sasjs format
DATA x;                DATA x;                /** ... **/
SET y;                 SET y;                 DATA x;
IF a THEN b;else c;    IF a THEN b;else c;      SET y;
RUN;                   RUN;                     IF a THEN b;
                                                else c;
                                              RUN;
```

Same rules in both columns - the header, the wrapping, the trailing spaces. The `/** ... **/` header is one of them: `hasDoxygenHeader` autofixes without the engine, and the middle column omits it only to keep the figure narrow. The layout is the difference, and it arrives because `format` hands the pass an engine that `lint fix` does not.

They are separate commands deliberately: making `lint fix` lay files out would reformat every project already using it, with no way to opt out.

## Prerequisites

Before using this command, [install](/installation) the SASjs CLI. A `sasjs/sasjsconfig.json` is not required.

Configuration is read exactly as [`sasjs lint`](/lint) reads it: `.sasjslint` in the project directory, then `~/.sasjslint`, then the defaults.

## Syntax

```
sasjs format [filterStrings..] [--check]
```

With no filter, every `.sas` file in the project directory is formatted, skipping `node_modules` and the generated `sasjsbuild` and `sasjsresults` trees - the same list `sasjs lint fix` skips, so `sasjs build && sasjs format --check` does not fail on files the build just wrote. A filter is either an absolute path - a file or a folder - or a run of whole path segments inside the project, compared as plain text: `sasjs format sasjs/macros` matches however the separators are written, `sasjs format macros` does not match `sasjs/macros_old`, and `[` names nothing rather than being read as a pattern. A filter that names no file - a typo, a renamed folder, an empty folder - is reported and the run fails, so a mistyped path cannot pass a `--check` gate.

## Encoding and line endings

Line endings: the engine returns lines joined on a single LF, and the lint pass that follows re-joins them with the ending `lineEndings` in `.sasjslint` selects - so `"lineEndings": "crlf"` keeps CRLF, and the default leaves the engine's LF.

Its default is `off`, and `@sasjs/lint` registers the `lineEndings` rule only for `lf` or `crlf`. On a project that says nothing, then, `sasjs lint` reports nothing about a CRLF file while `sasjs format` still rewrites it - the two do not agree on the default, and the engine is why.

A byte-order mark is preserved. It records how a file is encoded rather than how it is formatted, so the command does not remove it.

Each file is replaced rather than overwritten in place: the new content is written beside it and renamed onto the original, so a run interrupted part way cannot leave a source file truncated.

## The `--check` flag

`--check` writes nothing. It names the files that would change and exits non-zero if there are any:

```
sasjs format --check
```

```
1 of 1 files are not canonically formatted:
/projects/myapp/sasjs/macros/mf_test.sas

 ERROR   Run `sasjs format` to rewrite them.
```

That is how formatting becomes a gate in a pipeline - the job [`sasjs lint`](/lint) does for rules. The exit code is 7, distinct from lint's 3 and logcheck's 5, so a script can tell formatting drift from a rule violation from a run SAS complained about.

## What it will not format

An absolute path that is not a `.sas` file is refused rather than formatted - the language engine will happily reprint a markdown file, and a formatter that rewrites what it was not asked to is worse than one that says no. A path named this way is reported and the run fails.

A file that cannot be read, formatted or written is named with the reason and the run fails, but the rest of the walk still happens: one unreadable file must not leave every file after it untouched.

## When the engine cannot load

The layout pass needs `@sasjs/sas-language`, which the CLI installs with itself. If it cannot be loaded the rules still run, but the command **fails** and says why: a rule-only run must not read as a clean one, or a broken install would pass the very gate `--check` exists to provide.

## Keyword case

Keyword casing comes from `keywordCase` in `.sasjslint`, and its default is `preserve` - formatting a project that has said nothing about casing will not change any.

```json
{
  "keywordCase": "upper"
}
```

Accepted values are `upper`, `lower` and `preserve`. Strings and comments are left alone. One honest limit: a name the lexer cannot tell from a keyword is cased with it, so a DATA step variable called `label` becomes `LABEL` under `upper`. That is documented in the [lint README](https://github.com/sasjs/lint#readme) and it goes away when the upstream printer offers a casing option.

## Formatting is stable

Running `sasjs format` twice changes nothing the second time, which is what makes `--check` usable: a repository that was just formatted passes the gate.

This takes two passes internally. The rules write the doxygen header from the template in `.sasjslint`, and the printer then re-indents comment bodies, so the first pass hands the second a header it moves. `sasjs format` repeats until the text stops changing. A file that has not settled after three passes is **left exactly as it was found** and named, and the command fails rather than writing output that flickers - writing the last pass would leave a file that the next `--check` flags again.

## A pre-commit hook

```sh
#!/bin/sh
sasjs format --check || {
  echo "Run 'sasjs format' and stage the result."
  exit 1
}
```

## Related

- [`sasjs lint`](/lint) - report the rules without changing anything, and `lint fix` for what a rule can repair on its own
- [`sasjs logcheck`](/logcheck) - the post-execution counterpart, for what SAS printed

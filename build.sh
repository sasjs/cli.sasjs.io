#!/bin/bash
# Build the site locally the way CI builds it.
#
#   pip install -r requirements.txt
#   ./build.sh
#
# The output lands in ./site, which is gitignored.
set -euo pipefail
cd "$(dirname "$0")"

generate-schema-doc --config-file sasjsconfig-docs.yaml docs/sasjsconfig-schema.json docs/sasjsconfig.html
mkdocs build --strict

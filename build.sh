#!/bin/bash
####################################################################
# PROJECT: SASjs Developer Guide                                   #
####################################################################

generate-schema-doc --config-file sasjsconfig-docs.yaml docs/sasjsconfig-schema.json docs/sasjsconfig.html

# deprecated - now runs with a github action
#BUILD_FOLDER="/tmp/sasjscli_build"
#CWD="$(pwd)"
#
### Create regular mkdocs docs
#echo 'building sasjs CLI mkdocs'
#mkdocs build --clean
#
#
#rm -rf $BUILD_FOLDER
#mkdir $BUILD_FOLDER
#
#cd $BUILD_FOLDER
#git clone git@github.com:sasjs/cli.sasjs.io.git .
#git checkout gh-pages
#rm -r *
#cp -r $CWD/site/* $BUILD_FOLDER
#echo 'cli.sasjs.io' > CNAME
#git add .
#git commit -m "build.sh build on $(date +%F:%H:%M:%S)"
#git push


#!/bin/bash
####################################################################
# PROJECT: SASjs Developer Guide                                   #
####################################################################

BUILD_FOLDER="/tmp/sasjscli_build"
CWD="$(pwd)"

## Create regular mkdocs docs
echo 'building sasjs CLI mkdocs'
mkdocs build --clean


rm -rf $BUILD_FOLDER
mkdir $BUILD_FOLDER

cd $BUILD_FOLDER
git clone git@github.com:sasjs/cli.sasjs.io.git .
git checkout master
rm -r *
cp -r $CWD/site/* $BUILD_FOLDER
echo 'cli.sasjs.io' > CNAME
git add *
git commit -m "build.sh build on $(date +%F:%H:%M:%S)"
git push


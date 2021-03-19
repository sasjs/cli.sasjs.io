This should not be renamed README.md to avoid being part of the published docs.

The site is built automatically on pushing to the main branch as part of a github action.  To contribute, just change the relevant markdown file in the docs folder and push.

For manual / local builds:

1. brew install mkdocs
2. pip install mkdocs-material
3. pip install fontawesome_markdown
4. pip install mkdocs-redirects
5. pip install json-schema-for-humans

To build, navigate to the root of this repo and run:
    mkdocs build --clean
    mkdocs serve

Deployment is automatic on being merged to master branch.
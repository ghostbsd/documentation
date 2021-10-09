GhostBSD Documentation portal
=============================
This Documantaion repository wil replace https://wiki.ghostbsd.org and builds automatically on every changes pushed in.

It uses Sphinx, myst-parser, [readthedocs.io](https://ghostbsd-documentation-portal.readthedocs.io) hook to produce documentation from the Markdown source files in this repository.


## Local development server

Use a local development server that regenerates the output whenever the input changes:

```
git clone git@github.com:ghostbsd/documentation.git
sudo pkg install -y py38-pip py38-sphinx py38-myst-parser py38-sphinx_rtd_theme gmake
pip install docutils==0.16
sudo pip install sphinx-autobuild
cd documentation
sphinx-autobuild source build/html
```

Now open http://127.0.0.1:8000/index.html in a web browser. It will be regenerated and refreshed whenever one of the files changes get saved.

## Generating documentation

One can also generate documentation in various output formats locally:

```
gmake html
gmake epub

```

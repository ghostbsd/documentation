GhostBSD documentation portal
=============================
This repository is replacing https://wiki.ghostbsd.org/. 

Each change committed here triggers an automated build that results in an update to the portal: 

* https://ghostbsd-documentation-portal.readthedocs.io/

Automation involves Sphinx, myst-parser, Markdown, and a hook with the portal.

## Local development server

Use a local development server that regenerates the output whenever the input changes:

```
git clone git@github.com:ghostbsd/documentation.git
sudo pkg install -y py311-pip
sudo pip install sphinx sphinx-rtd-theme myst-parser sphinx-autobuild
cd documentation
sphinx-autobuild . build/html
```

Then, open http://127.0.0.1:8000/index.html in a web browser. It will be regenerated and refreshed whenever a changed file is saved.

## Generating documentation

One can also generate documentation, in various output formats, locally:

```
gmake html
gmake epub
```

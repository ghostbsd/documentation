# Requirements

## Speaking English

Developers come from all around the World, if you speak English you'll be able to work with anybody.

You're probably OK if you're here reading this guide. You don't need to be fluent or to have great English, but you need to understand English enough to communicate.

## Knowing how to use Git

Git is the version control system we are using to keep track of changes. We are using it all the time and everywhere.

If you don't know about Git, stop right there, you need to learn it.

To learn Git, visit [GitHub Docs](https://docs.github.com/en/get-started/quickstart/set-up-git).

Make sure you are familiar with the concepts of commits, branches, remotes, reverts and rebases.


## Knowing how to use GitHub

We are using GitHub to host our Git repositories and to work together on the code.

You will need to have a GitHub account set up.

To open a GitHub account, visit [GitHub](https://github.com/).

You will also need to know how to use GitHub to browse code changes, to fork a project, to make pull requests, etc..

To set up your GitHub account properly and learn how to use GitHub, visit the [GitHub Help](https://docs.github.com).

## Running GhostBSD

For most projects, you will need a computer running the latest version of GhostBSD.

You can run an earlier version, or FreeBSD, but if you run the latest GhostBSD build you are guaranteed everything will work.

# Set Up

Below explains how to get your computer set up.

## Create a project Sandbox

It is a good idea to create a directory for all your development needs, in which you will have sub-directories for each project, or each group of projects. This keeps things tidy and well organized in your computer so it becomes easier to search for code across different projects.

We commonly call our main development directory “Sandbox” and place it in our home folder.

```
mkdir ~/projects/ghostbsd
```

Of course, you can call it whatever you want and place it anywhere you want as well.

# Technologies

Below is an overview of the technologies we are using.

## Computer Languages

We use a variety of computer languages in GhostBSD.

You don't need to know them all and you don't need to know them well. It really depends on which project you want to work and what you want to achieve.

Here are the languages we use the most.

### Python

Most software applications and most configuration tools are also written in Python.

The advantage of Python is that it is easy to learn and fast to develop with.

### C

Many software applications and most libraries are written in C.

The C language is low-level, hard to master and tedious to develop with, but it gives fast performance and it is the most supported language in FreeBSD almost everything is accessible from C.

### Bourne shell script

Most scripts in the FreeBSD are using [Bourne shell(sh)](https://en.wikipedia.org/wiki/Bourne_shell) scrip. Some GhostBSD tools like ghostbsd-build and xconfig are written in Bourne shell.

## GNOME Toolkit and libraries

All our user interfaces use [GTK3](https://docs.gtk.org/gtk3/) toolkit.

Our development relies heavily on the GNOME libraries, in particular we use GLib and GObject lot.

We are mostly using Python and we access them via [GObject Introspection](https://gi.readthedocs.io).

## Tools

### Development environment

To write and edit code, you can use anything you want. Some people prefer lightweight editors while others prefer full-fledged IDEs. It is a matter of taste. Development is all about fun, so what matters the most is that you love the tools you use.

If you're not sure what to use, have a look around and try a few editors/IDE until you find your favorite one.

Eric uses [Sublime Text](https://www.sublimetext.com/).

```
sudo pkg install linux-sublime3
```
or
```
sudo pkg install linux-sublime-text4
```

If you install Sublime, also install its [Package Control](https://packagecontrol.io/installation) and then use it to install the *GitGutter* and *TrailingSpaces* extensions.

[Visual Studio Code](https://code.visualstudio.com/) is also a very popular choice.

```
sudo pkg install vscode
```

There are many code editors available under GhostBSD, you can choose your favorite editor.

### Version control

When it comes to version control we are using git and nothing else. All our code is version-controlled with it.

That being said, you don't necessarily have to use the git command line.

Here are a few tools you can use to make using git easier.

gitk is ugly and looks dated (it was developed in Tcl/Tk) but it’s very useful to quickly look at the commit history, to create branches and to cherry pick.

You can install it from the repositories:
```
pkg install git-gui
cd ~/projects/ghostbsd
git clone https://github.com/ghostbsd/ghostbsd-ports.git
cd ghostbsd-ports
gitk
```
From a project directory, simply type gitk to see the history of commits. You can also specify a branch name to see that branch instead, or a subdirectory to only see the history of a particular directory.

gitg is very similar and it looks better (it’s using Gtk), but its feature set is slightly different.
```
pkg install gitg
cd ~/projects/ghostbsd
git clone https://github.com/ghostbsd/ghostbsd-ports.git
cd ghostbsd-ports
gitg
```
From the repository you can also look at git-cola and git-gui.

If you are looking for a more complete solution, have a look at [Sublime Merge](https://www.sublimemerge.com/). It is also compatible with Sublime Text.

You can also check the plugins and features available in your IDE/editor. Visual Studio Code, and Sublime Text in particular come with a lot of support for Git and GitHub.

### devhelp

Devhelp shows the reference manuals for the development libraries installed on your computer. For most libraries, the documentation is included in their -dev or -doc package (for instance, if you are working with GTK3, make sure to install libgtk-3-dev and libgtk-3-doc).
```
pkg install devhelp
```
You can launch DevHelp from the applications menu and use it to browse or search the libraries reference manuals. You will often need to check the syntax or the arguments of a particular function. It is nice to be able to get the information locally without having to search online.

### d-feet

Some programs use DBus to communicate with others. We use d-feet to browse and troubleshoot DBus.
```
pkg install d-feet
```
With d-feet you can quickly find a service on DBus, browse its interface and even call some of its functions manually.

### meld

Meld is a visual diff tool. It shows the differences between two files and it is great at it.
```
pkg install meld
```

### Other cool tools

Most of our configuration is stored in dconf and we use gsettings (from the command line) to look at it or modify it. If you want to do it graphically, you can install dconf-editor.

```
pkg install dconf-editor
```
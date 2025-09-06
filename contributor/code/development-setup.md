# Development Environment Setup

This guide will help you set up your development machine for contributing code to GhostBSD. Whether you want to work on Python applications, C system tools, or shell scripts, follow these steps to get started.

## Prerequisites

Before setting up your development environment, make sure you've covered the [general contributor requirements](../getting-started/index#requirements-for-all-contributors) including Git, GitHub account, and preferably running GhostBSD.

## Technologies We Use
Here’s a quick rundown of the tools and languages you’ll encounter in GhostBSD development.

### Programming Languages
GhostBSD projects use a mix of languages depending on the task. You don’t need to master them all—just focus on what’s relevant to your interests.

#### Python
Most of our user-facing tools—like NetworkMgr, Update Station, and Software Station—are written in Python. It’s easy to learn, quick to develop with, and widely used in our ecosystem.

#### C
The FreeBSD base system (which GhostBSD builds upon) and many libraries are written in C. It’s a low-level language that requires more effort to work with but delivers excellent performance and deep system access.

#### Bourne Shell (sh)
Many scripts, including build tools like `ghostbsd-build` and utilities like `xconfig`, are written in Bourne shell script. It’s a lightweight way to automate tasks in the FreeBSD ecosystem.

### GUI Toolkit and Libraries
Our graphical applications primarily use the [GTK3 toolkit](https://docs.gtk.org/gtk3/). We rely on GNOME libraries like GLib and GObject, often accessed through Python via [GObject Introspection](https://gi.readthedocs.io/).

#### Configuration Tools
We use `dconf` for storing system configuration. You can interact with it via the `gsettings` command-line tool or the graphical `dconf-editor`.

Install `dconf-editor` for a visual interface:

```shell
sudo pkg install dconf-editor
```

## Setting Up Your Development Environment


Let's get your machine ready for GhostBSD development.

### Install Development Tools

#### Essential Development Packages
Install the development toolkit and OS development packages:

```shell
# Install development tools and utilities
sudo pkg install ghostbsd-devel-tools

# Install OS development packages (compilers, libraries, build tools)
sudo pkg install -g 'GhostBSD*-dev'
```

The `ghostbsd-devel-tools` package provides commonly used development tools and utilities, while the `GhostBSD*-dev` packages include essential build tools, compilers, and libraries needed for system-level development.

### Create a Development Directory
Organize your work in a dedicated directory. A common spot is your home directory:

```shell
mkdir -p ~/projects/ghostbsd
````

Run cd `~/projects/ghostbsd` to jump in and start cloning repos. This keeps your repositories and files tidy.

### Development Tools
#### Code Editors/IDEs
Pick an editor or IDE you like—there’s no wrong choice! Here are some favorites:

* **PyCharm Community Edition:** Perfect for Python tools like NetworkMgr with built-in linting and debugging.
    ```shell
    sudo pkg install pycharm-ce
    ```
* `Visual Studio Code:` Lightweight and extensible, great for general-purpose coding.
    ```shell
    sudo pkg install vscode
    ```
* `Sublime Text:` Fast and minimalist with great plugin support.
    ```shell
    sudo pkg install linux-sublime-text4
    ```
* `Neovim or Vim:` Lightweight for shell scripts or terminal fans.
    ```shell
    sudo pkg install neovim
    ```

For Python development, PyCharm stands out with built-in linting. If using another editor, set up a Pylint plugin (e.g., via VS Code’s marketplace or Sublime’s Package Control) to catch issues early. Try one that fits your style!

#### Version Control Tools
We use Git for version control. Beyond the command line, these graphical tools help:

* **gitg:** A GTK-based interface to browse Git history.
    ```shell
    sudo pkg install gitg
    cd ~/projects/ghostbsd
    git clone https://github.com/ghostbsd/ghostbsd-ports.git
    cd ghostbsd-ports
    gitg
    ```
* **Sublime Merge:** A sleek Git client, pairs well with Sublime Text.
    ```shell
    sudo pkg install linux-sublime-merge
    ```

Clone a repo first (e.g., `git clone https://github.com/ghostbsd/ghostbsd-ports.git`) to explore with these. Many editors also have Git plugins—check yours!

### How to Contribute to GhostBSD

We welcome all contributions! To get started, here's how to jump in:

-   **Check the Roadmap**: See our [releases roadmap](https://github.com/orgs/ghostbsd/projects/4) or [current sprint](https://github.com/orgs/ghostbsd/projects/4/views/22) for priorities.
-   **Find a Task**: Browse the [issue tracker](https://github.com/orgs/ghostbsd/projects/4/views/21) for bugs or small features, or check [documentation tasks](https://github.com/orgs/ghostbsd/projects/5/views/1) for writing opportunities.
-   **Submit Your Work**: Fork the repo, make changes, and send a pull request via GitHub. For docs, contribute to [ghostbsd/documentation](https://github.com/ghostbsd/documentation).
-   **Join Us**: Hop into our [Telegram group](https://t.me/ghostbsd_dev) for guidance or to say hi and share what you're working on!
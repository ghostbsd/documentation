# Getting Started with Documentation

Ready to contribute to GhostBSD documentation? This guide will help you get started with writing, editing, and improving our documentation to make GhostBSD more accessible to everyone.

Writing documentation is a great way to start improving GhostBSD user experience, and you will be helping a lot of GhostBSD users to better understand their desktop and applications. Anyone with reasonable English skills and good knowledge of FreeBSD, GhostBSD or MATE can help.

## Prerequisites

Before contributing to documentation, make sure you've covered the [general contributor requirements](../getting-started/index#requirements-for-all-contributors) including Git, GitHub account, and familiarity with basic version control concepts.

## Communicating with the team

Get in touch with the team through our [GhostBSD Contributors](https://t.me/ghostbsd_dev) Group on Telegram.

## Getting the resources

To document GhostBSD projects, you will want to run a [recent GhostBSD release](https://www.ghostbsd.org/download), and to document third-party projects, you will also need a recent version of that program. We use [Sphinx](https://www.sphinx-doc.org) with [MyST](https://myst-parser.readthedocs.io) to make it easy to create our Documentation Hub. You should also get familiar with [MyST Markdown syntax](https://myst-parser.readthedocs.io/en/latest/intro.html).

## Setting up the Documentation Environment

1. **Clone the documentation repository:**
   ```bash
   git clone https://github.com/ghostbsd/documentation.git
   cd documentation
   ```

2. **Install Python dependencies:**
   ```bash
   sudo pkg install -y py311-pip
   sudo pip install -r requirements.txt
   ```

3. **Start the development server:**
   ```bash
   sphinx-autobuild . build/html
   ```

4. **View your work:** Open http://127.0.0.1:8000/index.html in your browser. It will automatically refresh when you save changes.

## Tasks

You can get your first contribution committed today! Here are some tasks for beginners:
* Read the documentation if there is a grammar issue, fix it
* Improve the sentences and paragraphs
* Update ScreenShots and Documentation
* Create issues on our  [GitHub Documentation Issues](https://github.com/ghostbsd/documentation/issues/new).

There are also tasks and issues that can be found at our [Documentation Management](https://github.com/orgs/ghostbsd/projects/5) on GitHub.

If you see any article from the [Wiki](https://wiki.ghostbsd.org/) that could be ported, communicate the effort with the others in the GhostBSD dev chat.
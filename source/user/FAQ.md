Frequently Asked Questions
==========================

```{contents} Table of Contents
:depth: 3
:local:
```

This document aims to cover the most frequently asked questions concerning the GhostBSD operating system. Although initially intended to reduce bandwidth and avoid the same old questions being asked repeatedly, FAQs have become recognized as valuable information resources.

Every effort has been made to make this FAQ as informative as possible; if you have any suggestions about improving it, please feel for this GitHub and create a [Pull Request on GitHub](https://github.com/ghostbsd/documentation).

## Introduction

### What is GhostBSD?

Briefly, GhostBSD is a UNIX®-like operating system. It works on AMD64 and Intel® platforms. GhostBSD is based on FreeBSD, which is based on U.C. Berkeley’s “4.4BSD-Lite” release, with some “4.4BSD-Lite2” enhancements. It is also based indirectly on Lynne and William Jolitz's port of U.C. Berkeley’s “Net/2” to the i386, known as “386BSD”, though very little of the 386BSD code remains. Currently, GhostBSD provides MATE desktop as the default version and a community release with XFCE desktop.

### Why is it called GhostBSD?

GhostBSD was developed as an operating system to hack Gnome using FreeBSD technology. After a while, it became what was referred to as **(G)nome (host)ed by Free(BSD)**, which means that Gnome is hosted on the FreeBSD system. Today GhostBSD's name is still relevant to the past since MATE is a continuation of Gnome 2.

### On which FreeBSD branch is GhostBSD based?

GhostBSD is based on the latest stable branch. It is currently on stable/13 and will soon move to stable/14.

### Who can use GhostBSD?

GhostBSD can be used by companies, researchers, data scientists, computer professionals, students, and home users worldwide in their work, education, and recreation.

### Does the GhostBSD license have any restrictions?

Yes. Those restrictions do not control how you use the code, merely how you treat the GhostBSD Project. If you have serious license concerns, you can just read the actual license. For the simply curious, the license can be summarized like this:

* Do not claim that you wrote this.
* Do not sue us if it breaks.

### Can GhostBSD replace my current operating system?

For most users, yes.

Most people do not use an operating system. Instead, they use applications that make a computer useful. GhostBSD is designed to provide a desktop and full-featured environment for applications. It supports various web browsers, office suites, email readers, graphics programs, programming environments, network servers, and everything else you might want. Most of these applications can be built using the FreeBSD Ports Collection.

If you need to use an application only available on a specific operating system, it may be hard to replace that operating system (this situation is called vendor lock-in). However, chances are that there is a very similar alternative application on GhostBSD.

If you migrate to GhostBSD from some other UNIX®-like environment, you already know most of what you need to know. However, if your background is in graphic-driven operating systems such as Microsoft Windows® and older versions of MacOS®, expect to invest additional time learning the UNIX way of doing things.

## Support

### What’s the best way to get support?

At this point, the best ways to contact other GhostBSD users or developers are:

* On [Telegram](https://t.me/ghostbsd) you will meet developers and users
* On [Element](https://app.element.io/#/room/#ghostbsd:matrix.org) which is connected with Telegram
* On The [GhostBSD Forums](https://forums.ghostbsd.org)

## Software Installation

### How do I install new software?

GhostBSD software can be installed in three different ways:

* Software Station is the official UI tool to manage (search, install, and uninstall) binary packages on GhostBSD.
* FreeBSD's package manager pkg can be used to manage.
* Ports Tree can be used to install software from the ports package.

### Can I use Linux software on my GhostBSD system?

First, you should know that most Linux software is open-source software. It is freely available for many operating systems, not just Linux. Therefore, most software that runs on Linux should also run on GhostBSD.

Like FreeBSD, GhostBSD uses something called Linux Binary Compatibility. In a nutshell, that means you can run many Linux applications as-is. This **[section](https://docs.freebsd.org/en/books/handbook/linuxemu/)** of the FreeBSD Handbook explains this compatibility in more detail and describes when it does not work.

However, you do not have to set up Linux Binary Compatibility on your GhostBSD system as it is already configured for you and should "just work".


## System and software updates

### How should I update GhostBSD to the latest updates?

To upgrade GhostBSD, use the Update Station. It was made to upgrade GhostBSD properly. If you want the pkg command line, please follow this [article](upgrading-guide.md#ghostbsd-upgrade-with-pkg-cli). If you do not use pkg properly to upgrade GhostBSD, you will most likely get your system broken.

## Miscellaneous

### Why can't I compile code or ports on GhostBSD?

GhostBSD does not come with **os-generic-userland-devtools** preinstall anymore. To enable the capability to compile code and ports install **os-generic-userland-devtools**.

```
sudo pkg install os-generic-userland-devtools
```
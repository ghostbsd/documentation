Frequently Asked Questions
==========================

This document aims to cover the most frequently asked questions concerning the GhostBSD operating system. Although initially intended to reduce bandwidth and avoid the same old questions being asked repeatedly, FAQs have become recognized as valuable information resources.

Every effort has been made to make this FAQ as informative as possible; if you have any suggestions about improving it, please feel for this GitHub and create a [Pull Request on GitHub](https://github.com/ghostbsd/documentation).

## Introduction

### What is GhostBSD?

Briefly, GhostBSD is a UNIX®-like operating system. It works on AMD64 and Intel® platforms. GhostBSD is based on FreeBSD, which is based on U.C. Berkeley’s “4.4BSD-Lite” release, with some “4.4BSD-Lite2” enhancements. It is also based indirectly on William Jolitz’s port of U.C. Berkeley’s “Net/2” to the i386, known as “386BSD”, though very little of the 386BSD code remains. At this time, GhostBSD provides MATE desktop as default version, and a community release with XFCE desktop.

### Why is it called GhostBSD?

GhostBSD was developed as an operating system to hack on Gnome using FreeBSD technology. After a while, it became what was referred to as **(G)nome (host)ed by Free(BSD)**, which means that Gnome is hosted on the FreeBSD system. Today GhostBSD name is still relevant to the past since MATE is a continuation of Gnome2.

### On which FreeBSD branch is GhostBSD based on?

GhostBSD is based on the FreeBSD 13.0-STABLE branch.

### Who can use GhostBSD?

GhostBSD can be used by companies, researchers, data scientists, computer professionals, students, and home users all over the world in their work, education, and recreation.

### Does the GhostBSD license have any restrictions?

Yes. Those restrictions do not control how you use the code, merely how you treat the GhostBSD Project itself. If you have serious license concerns, read the actual license. For the simply curious, the license can be summarized like this:

* Do not claim that you wrote this.
* Do not sue us if it breaks.

### Can GhostBSD replace my current operating system?

For most users, yes.

Most people do not use an operating system. Instead, they use applications, as these are what make a computer useful. GhostBSD is designed to provide a desktop and full-featured environment for applications. It supports various web browsers, office suites, email readers, graphics programs, programming environments, network servers, and just about everything else you might want. Most of these applications can be built using the FreeBSD Ports Collection.

Suppose you need to use an application that is only available on one operating system. In that case, you cannot easily replace that operating system (this situation is referred to as vendor lock-in). However, the chances are that there is a very similar application on GhostBSD.

If you migrate to GhostBSD from some other UNIX®-like environment, you already know most of what you need to know. However, if your background is in graphic-driven operating systems such as Microsoft Windows® and older versions of MacOS®, expect to invest additional time learning the UNIX way of doing things.

## Support

### What’s the best way to get support?

At this point, the best ways to contact other GhostBSD users or developers are:

* On [Telegram](https://t.me/ghostbsd) you will meet developers and users
* On [Element](https://app.element.io/#/room/#ghostbsd:matrix.org) which is connected with Telegram
* On The [GhostBSD Forums](https://forums.ghostbsd.org)

## Software Installation

### How do I install new software?

In GhostBSD software can be installed in three different ways:

* Software Station is a GTK+ based tool to manage (search, install and uninstall) binary packages on GhostBSD.
* FreeBSD's package manager PKG can be used to manage packages using the command line.

### Can I use Linux software on my GhostBSD system?

First, you should know that most Linux software is open-source software. That is, it is freely available for many operating systems, not just Linux. Therefore, most software that runs on Linux should also run on GhostBSD.

Like FreeBSD, GhostBSD uses something called Linux Binary Compatibility. In a nutshell, that means you can run many Linux applications as-is. This **[section](https://docs.freebsd.org/en/books/handbook/linuxemu/)** of the FreeBSD Handbook explains this compatibility in more detail and describes when it does not work.

However, you do not have to set up Linux Binary Compatibility on your GhostBSD system as it is already configured for you and should "just work".


## System and software updates

### How should I update GhostBSD to latest updates?

To upgrade GhostBSD, please use the Update Station! Do not use pkg to upgrade if you are not aware of how the updates work with GhostBSD, or your system will most likely get broken.


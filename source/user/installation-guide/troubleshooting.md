Troubleshooting
===============

## The live system does not boot.

### If Secure Boot is enabled, in BIOS settings for your computer, disable it.

Support for Secure Boot is [not yet integral to FreeBSD](https://wiki.freebsd.org/SecureBoot).

### Your hardware may not be supported.

GhostBSD is based on [the STABLE branch](https://www.freebsd.org/where/#helptest) of FreeBSD.
Hardware support is generally good, however, there may be issues with some modern hardware.

To determine whether the issue relates to hardware, or to the USB drive:

- try to boot from the same drive on a different computer.

For information about hardware components, please see FreeBSD information for the _RELEASE_ that corresponds to the version of _STABLE_ used by GhostBSD.

You can run `ghostbsd-version -kv` to show the version number. As an example, _**14**0**1**502_ was from the _14.1-STABLE_ branch, and **hardware information** is amongst the pages at <https://www.freebsd.org/releases/14.1R/>.

### The installation media may be corrupted.

Corruption may occur during download of an installer image file, or during creation of a bootable USB flash drive.
Please refer to the [Getting started](getting-started.md) guide to download a new image and create a new bootable USB flash drive.

## The live system does not reach a graphical desktop environment.

…

### The installation ISO may be outdated.

Try creating a bootable USB using the [latest image](https://www.ghostbsd.org/download).
GhostBSD is a rolling release and ocassionally updates and fixes are pushed to the latest build before a new official image is created.

----

Please note: this page is incomplete.

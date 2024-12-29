Troubleshooting
===============

## The live system does not boot.

### If Secure Boot is enabled, in BIOS settings for your computer, disable it.

Support for Secure Boot is [not yet integral to FreeBSD](https://wiki.freebsd.org/SecureBoot).

### Your hardware may not be supported.

GhostBSD is based on [the STABLE branch](https://www.freebsd.org/where/#helptest) of FreeBSD.
Hardware support is generally good, however, there may be issues with some modern hardware.

To determine whether the issue relates to your hardware, or to the bootable USB:

- try to boot the live system on a different computer.

Please refer to [FreeBSD Hardware Compatibility](https://docs.freebsd.org/en/books/faq/#hardware) for more information on indiviual components.

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

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

### GhostBSD automated configuration does not support some dual-GPU configurations.

Symptoms may include:

- _Setting up (Intel DRM).. Please wait.._ -- on screen, no progress beyond this line
- a mostly black screen -- a white rectangle in the upper left corner, with a pointer that can not be moved.

Auto-config (kernel modules, other graphics drivers, X.Org) may fail with, for example: 

- computers that support [NVIDIA Optimus](https://en.wikipedia.org/wiki/Nvidia_Optimus)
- some dual-GPU Macs.

If your computer BIOS allows one of two GPUs to be disabled: please make this setting before your next attempt to boot the live system.

Users of affected Apple hardware may find it impossible to set the Mac to use a single GPU.


### …

Please note: this section is incomplete.

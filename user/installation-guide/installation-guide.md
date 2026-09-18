Installation Guide
==================

<h2>Introduction</h2>

GhostBSD comes with a Graphical installer called GBI.

After reading this guide, you will know:

* How to make a USB memory stick.
* How to set up a Virtual Machine. 
* How to install GhostBSD.
  * How to install GhostBSD using the entire disk drive. 
  * How to install alongside other operating system(s).
* Troubleshooting the installer and live media.

:::{warning}
Do not install GhostBSD and FreeBSD on the same disk. They share the same UEFI boot loader, so GhostBSD can boot the existing FreeBSD installation instead. Put GhostBSD on a separate disk. Dual-boot with Windows or Linux is supported.
:::

```{toctree}
:caption: Table of Contents

getting-started
full-disk-installation
custom-installation
troubleshooting
```

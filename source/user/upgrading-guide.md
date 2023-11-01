Upgrading GhostBSD Guide
========================

```{contents} Table of Contents
:depth: 3
:local:
```

## Synopsis
GhostBSD is under constant development and keeps in sync with the latest FreeBSD stable developments source code. However, upgrading GhostBSD to FreeBSD is not an option. GhostBSD provides Update Station to keep the system and all software up-to-date and allows easy upgrades between system versions. GhostBSD is a slow-rolling release meaning GhostBSD offers a stable release cycle and version increments on every system or software package build. This guide describes how to keep GhostBSD up-to-date.

After reading this build, you will know the following:
* How to keep a GhostBSD system up-to-date with Update Station.
* How to keep a GhostBSD system up-to-date with pkg cli.

## GhostBSD upgrade with Update Station
Applying security patches promptly and upgrading to a newer release of an operating system are important aspects of ongoing system administration. GhostBSD includes a GUI utility called Update Station, which performs both tasks.

Update Station uses FreeBSD pkg to perform system and software updates, which have been made to update/upgrade GhostBSD properly. GhostBSD upgrades its base system using packages. Update Station will always upgrade you to the latest system and packages. If there is a kernel upgrade, it will reinstall all packages to ensure that there are no kernel mismatch issues with drivers and some software.

This section demonstrates how to upgrade to the latest version and discusses some of the considerations when upgrading the operating system.

### Update notification
On GhostBSD, you will receive a notification in the notification area, and an orange icon will be visible when new software or system updates are available. Right Click on the icon, and Software Station will open a Window with the list of software that will be upgraded.

**[Picture coming soon]**

### Before upgrading
On the Upgrade list, a checkbox at the bottom is enabled by default to create a boot environment backup before the upgrade. It is recommended to keep it enabled in case an issue happens with the upgrade. With a BE backup the system can be restored to the stat it was before the upgrade was perform.

**[Picture coming soon]**

### Starting the upgrade
Click Install Upgrade to start the upgrade.

**[Picture coming soon]**

### Update progress
There is a window with a progress bar that will appear.

**[Picture coming soon]**

### Upgrade completed
After the upgrade is complete Update Station will be ask to restart the system if needed.

**[Picture coming soon]**

## GhostBSD upgrade with pkg cli
Upgrading packages with pkg has to be done in a specific way, specifically with OS upgrade.

### Before upgrading
Before upgrading with pkg make sure to backup the system boot environment with **bectl**. It is recommended to backup the system boot environment in case an issue happens with the upgrade. With a BE backup the system can be restored to the stat it was before the upgrade was perform.


### Determining how to upgrade
To determine how to upgrade packages with pkg, run **sudo pkg update -f** it will know if there is kernel mismatch.

```
> sudo pkg update -f
Updating GhostBSD repository catalogue...
pkg: Repository GhostBSD has a wrong packagesite, need to re-create database
Fetching meta.conf: 100%    163 B   0.2kB/s    00:01
Fetching packagesite.pkg: 100%    7 MiB   6.9MB/s    00:01
Processing entries:   0%
Newer FreeBSD version for package ztrack:
To ignore this error set IGNORE_OSVERSION=yes
- package: 1302505
- running kernel: 1301510
Ignore the mismatch and continue? [y/N]:
```

If a similar message than the above one is encounter, **sudo pkg upgrade -f** must be use to upgrade all installed packages or some problem could occur after rebooting. If **sudo pkg update -f** doesn't report kernel mismatch, **sudo pkg upgrade** can be used to upgrade packages.

### Starting the upgrade
Run the command below if there is a kernel mismatch with **update -f**.
```
sudo pkg update -f
```
Run the command below if there no kernel mismatch with **update -f**.
```
sudo pkg update
```

### After the upgrade
In most cases the system will need to be restarted after an upgrade.

## Troubleshooting

**[Content coming soon]**
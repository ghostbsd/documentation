Custom Installation
===================

A custom installation and full disk installation of GhostBSD both begin the same way. Please follow the [Full disk installation](full-disk-installation.md) guide until the *Disks and filesystem* section. When that section is reached, follow this guide to complete the custom installation.

The purpose of this guide is not to provide the steps for every possible configuration, but to provide a resource to get started with custom partitioning and filesystem layouts. Continue reading if you would like a more indepth description of the installation process. Skip to [Installing GhostBSD](#installing-ghostbsd) if you just want the basic steps needed for a custom installation.

## Partitioning schemes

There are two partitioning schemes available in GhostBSD that are used to divide a disk into sections called slices or partitions. There is the older Master Boot Record (MBR) layout and the newer GUID Partition Table (GPT) layout. If you would like to learn about the other partitioning schemes not in GhostBSD, click [here](https://en.wikipedia.org/wiki/Disk_partitioning#Boot_partitions). It is recommended that GhostBSD be installed using GPT except where compatability requirements dictate otherwise.

### MBR

There are several limitations when using the older MBR layout including limits on the size of the disk and number of partitions that are possible. MBR only officialy supports disks that are up to two terabytes. There is also a limit of four primary partitions but an extended partition may be used to increase this number. MBR is often associated with the legacy BIOS specification although the more modern UEFI specification can usually also boot from an MBR disk. More information can be found [here](https://en.wikipedia.org/wiki/Master_boot_record).

### GPT

GPT is a newer partitioning scheme developed as part of the UEFI specification designed to replace MBR and BIOS. GPT identifies partitions using globally unique identifiers (GUIDs), also known as universally unique identifiers (UUIDs). The advantages of GPT include support for larger disks and no partition limits. The supported sizes for GPT disks can range from about 9 to 75 zettabytes. A GPT disk can often be booted using BIOS or UEFI, however it is usually associated with the more modern standard of UEFI. For additional information on GPT, click [here](https://en.wikipedia.org/wiki/GUID_Partition_Table).

## File systems

There are two file systems that can be used to install GhostBSD, the Unix file system (UFS) and ZFS (previously the Zettabyte file system). While both file systems have pros and cons, ZFS is generally a good choice and is the recommended file system for GhostBSD.

### UFS

UFS is derived from the original filesystem used in Version 7 Unix. During its long history there have been two versions (UFS1 and UFS2), improvments, and features added. In the GhostBSD installer, there are options to use UFS2 with or without journaling and soft updates. These features can create a more robust system to better handle crashes and provide a snapshot ability. On average, UFS may require fewer resources than ZFS, but on most modern computers this should not typically be of concern. Additional details can be read [here](https://en.wikipedia.org/wiki/Unix_File_System).

### ZFS

ZFS is a modern filesystem first created as part of the Solaris operating system. Solaris and ZFS were released under open source licenses for a brief time. Eventually, both were placed back under closed source licenses. Prior to the license changes, ZFS was forked and developed by the open source community and is now used in various operating systems as OpenZFS. There are numerous benefits to using ZFS, such as, error checking, data compression and integrated snapshots. A more thorough history and explination of ZFS can be read [here](https://en.wikipedia.org/wiki/ZFS).

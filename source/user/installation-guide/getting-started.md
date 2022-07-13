Getting started
===============

## Status

GhostBSD is available for general use. 

## System requirements

* 2 GHz dual core Intel/ARM 64-bit processor
* 4 GiB RAM (system memory for physical and viritualized installs)
* VGA capable of 1024x768 screen resolution
* Network connection
* 15 GiB of storage
* Either a CD/DVD drive or a USB port for booting the installer media

In the future, there may also be builds for other processor architectures. We would like to bring down the RAM requirement considerably.

Please refer to [FreeBSD Hardware Compatibility](https://www.freebsd.org/doc/en_US.ISO8859-1/books/faq/hardware.html) for more information on individual components.

### Tested hardware

GhostBSD is known to boot to a graphical desktop on the following machines. Auxiliary functionality such as wireless networking, sound over HDMI, sleep, graphics acceleration, etc. has not yet been tested systematically.

Please contact us if you would like to sponsor the project with a hardware donation. We are especially looking for Lenovo devices from the previous generations that should be available second-hand inexpensively.

To see Hardware Probes of systems running GhostBSD, please see the [GhostBSD Hardware Database](http://bsd-hardware.info/?d=GhostBSD&view=computers) provided by bsd-hardware.info. It is reasonable to assume that every system listed there can at least successfully boot GhostBSD. Auxiliary functionality such as wireless networking, sound over HDMI, sleep, graphics acceleration, etc. may or may not be working.

### Networking hardware

Not all networking devices may be supported by GhostBSD yet. In those cases, you may want to consider using a USB based networking devices. GhostBSD developers currently have access to the following USB based networking devices which are known to work:

* [USB 802.11n WLAN Adapters based on `ID 0bda:8176 Realtek Semiconductor Corp. RTL8188CUS`](https://vermaden.wordpress.com/2020/10/30/realtek-usb-wifi-review/)
* [USB Wired Ethernet Adapters based on `ID 0b95:772b ASIX Electronics Corp. AX88772B`](https://www.freebsd.org/cgi/man.cgi?query=axe)

### Virtualization environments

``` .. note::
    We recommend running GhostBSD on real hardware ("bare metal") if possible. This should give you the best possible performance and hardware support.
```

Users have reported success in running GhostBSD in the following virtualization environments:

* VirtualBox host (on FreeBSD and macOS), known to work in BIOS and EFI mode

* VMware host (on Windows), possibly only working in BIOS mode?

* QEMU host (on Linux), works in both BIOS and EFI modes (see below). Note that for acceptable performance, QEMU needs KVM which is currently not available on FreeBSD hosts yet 

* Parallels host, reported to work in EFI mode (see below)

* Proxmox VE

Please note:

* The VM needs to be __64-bit__
* The VM needs __at least 4 GB of RAM__
* The VM needs __at least 2 CPU cores__
* The boot process takes longer than you might expect; boot in verbose mode to see the details
* For best results set **EFI/UEFI** boot mode (not BIOS)

Please report back about the results on your virtualization environment.

#### QEMU

Create an 8 GiB (or larger) `ghostbsd.img` image file on which you can install the system:

```
$ pwd
/home/user
$ mkdir -p .qemu/ghostbsd
$ fallocate -l $(( 8*1024*1024*1024 )) .qemu/ghostbsd/ghostbsd.img
```

Then, boot GhostBSD:

```
qemu-system-x86_64 -machine type=q35,accel=kvm \
-enable-kvm -cpu host -smp 2 -m 4096 \
-device virtio-net,netdev=vmnic -netdev user,id=vmnic,hostfwd=tcp::5222-:22 \
-vga std -soundhw hda -no-quit \
-drive format=raw,file=${HOME}/.qemu/ghostbsd/ghostbsd.img \
-drive format=raw,file=${HOME}/Downloads/ghostbsd.iso \
-boot menu=on
```

When QEMU starts, press `esc` and select `2` to boot the ISO.

Use the __Install GhostBSD__ utility to install GhostBSD do the disk image.

Then restart QEMU, you now remove the last two options from the above command.

Notes

* The `hostfwd=` option creates a port forward from your host port `5222` to the Qemu VM port `22`.
* Unfortunately the qemu-system-x86_64 USB tablet options do not work; you will need to press Ctrl+Alt+g to release the mouse pointer from the QEMU window
* To make QEMU full screen, press Ctrl+Alt+F

To boot/install GhostBSD in UEFI mode, first install [OVMF Open Virtual Machine Firmware](https://github.com/tianocore/tianocore.github.io/wiki/OVMF) on your host side. The package name for Fedora 32 is `edk2-ovmf`

Then add these two `qemu-system-x86_64` options:
```
-bios /usr/share/edk2/ovmf/OVMF_CODE.fd \
-smbios type=0,vendor=0vendor,version=0version,date=0date,release=0.0,uefi=on \
```

#### Parallels

* Select Hardware > Boot Order.
* Expand **Advanced Settings**. Set **BIOS** to "EFI 64-bit" and in the Boot flags field, enter `vm.bios.efi=1`. 

![Screenshot](https://docs.01.org/clearlinux/latest/zh_CN/_images/parallels-07.png)

#### Proxmox VE

* Memory: 4GB (not ballooned)
* Processors: 2 (1 socket 2 cores)
* BIOS: OVMF (UEFI)
* Display: Default (VGA)
* Machine: q35
* SATA Controller: VirtIO SATA for attaching virtual disk to (to install the system on)
* CD Drive: GhostBSD ISO
* Hard Disk: At least 8GB Raw
* Network Device: VirtIO

To set resolution, press F2 at boot to access OVMF settings. Select 'Device Manager > OVMF Platform Configuration > Change Preferred', save and reboot.

#### VirtualBox

Install VirtualBox using your package manager or from [here](https://virtualbox.org).

In the tools tab of the VirtualBox Manager, click on ```New```. Enter a name for your VM, set ```Type``` to FreeBSD, and set ```Version``` to FreeBSD (64-bit).


## Downloading

The **GhostBSD** ISO image is available for download [here](http://ghostbsd.org/download).

Experimental development images are available for download [here](https://download.ghostbsd.org/development/amd64/latest/).

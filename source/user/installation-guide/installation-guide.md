# GhostBSD Installation Guide
## Introduction
GhostBSD comes with it's own graphical installer called **GBI**.

After reading this chapter, you will learn about:
* Creating a live GhostBSD USB memory stick.
* Installing GhostBSD.
* Starting GhostBSD.
* A Walkthrough of GBI.
* Troubleshooting tips for installation & live media.

## Minimum Requirements
#### Minimum System Requirements

    64-bit x86 Processor
    4 GB of RAM
    15 GB of free hard drive space
    Network card

#### Recommended System Requirements

    64-bit x86 Processor
    8 GB of RAM
    30 GB of free hard drive space
    Network card
    Sound card
    3D accelerated video card

##### Supported Processors

    GhostBSD installs on any system containing a 64-bit (amd64) processor architecture.
    The amd64 name refers to AMD64 (“Hammer”) and Intel® EM64T architectures.
    The FreeBSD 13.0 Hardware Notes lists the amd64 processors known to work.
    
##### Supported Video Cards
GhostBSD uses X.org drivers for graphics support. During installation, graphics support will be configured automatically. Support for the major graphic vendors is as follows:

**NVIDIA**: if you want to use 3D acceleration, NVIDIA is currently the best supported as there is a native driver for GhostBSD.

**Intel**: 3D acceleration on most Intel graphics is supported. Due to the current KMS support, you will not be able to switch between the graphical console and a virtual console using Crtl+Alt+F#.

**ATI/Radeon**: 3D acceleration on most ATI and Radeon cards is supported.

**Optimus**: at this time Bumblebee[2] has not been ported to FreeBSD, meaning that there is no switching support between the two graphics adapters provided by Optimus. Optimus implementations vary, so GhostBSD may or may not be able to successfully load a graphics driver on your hardware. If you get a blank screen after installation, check your BIOS to see if it has an option to disable one of the graphics adapters or to set “discrete” mode. If the BIOS does not provide a discrete mode, GhostBSD will default to the 3D Intel driver and disable NVIDIA. This will change in the future when the NVIDIA driver supports Optimus.
##### Wireless Cards

GhostBSD supports many wireless networking cards. You can check if your card has a FreeBSD driver. If it does, it should "just work". Currently, there are some missing wireless drivers, typically for Broadcom and the newer Realtek series. N.B. USB wifi sticks may or may not be supported, it will depend on the chip used.

## Prerequisites

### Back Up Your Data
Be sure to back up all important data on the computer before installing GhostBSD. The GhostBSD installer will not provide a prompt before making changes to the hard disk drive. Once the process has started, changes to the hard disk drive cannot be undone.
### Check for FreeBSD Errata
GhostBSD is based on FreeBSD. As these problems are discovered and fixed, they are noted in 13.0-RELEASE Errata page on the FreeBSD web site. Check the errata before installing to make sure that there are no problems that might affect the installation.

## Prepare the Installation Media

The GhostBSD installation media is available as a .iso file. Copies of GhostBSD installation media are available for free at the GhostBSD download page.
Creating a bootable USB Flash Drive

After downloading the appropriate .iso file, copy it to a USB flash drive using one of the methods described below. Depending on the operating system, issue one of the following appropriate commands:
#### On BSD

    dd if=/path/to/GhostBSD-21.01.20.iso of=/dev/da0 bs=4m

#### On Linux

    sudo dd if=GhostBSD-21.01.20.iso of=/dev/sdf bs=4M

#### On Mac

    dd if=/path/to/GhostBSD-21.01.20.iso of=/dev/disk2 bs=10240

#### On Windows

    Download the desired .iso file
    Download Disk Imager from http://sourceforge.net/projects/win32diskimager/
    Insert your USB flash drive
    Note the drive letter assigned to your flash media
    Start Disk Imager
    Select the downloaded file and target device, and click "Write"
    Remove your USB flash drive when the operation is complete

##### Other USB Flash writer tools for Windows
* Balena Etcher [1] Works for Windows, macOS, & Linux. Rufus [2] Works just for Windows, needs a checkbox selected to do a pure write of .ISO image file
ISO CD / DVD writer tool
* ISORecorder [3] works from Windows Menu to write a .ISO file into a CD or DVD

## Conclusion

The steps described above will create a bootable GhostBSD system on a USB flash drive. To start a live session, connect the USB thumb drive to the computer and reboot the computer. Further information can be found here.

## Live Image
If booting from USB flash drive, insert the USB flash drive then start the computer.

If booting from DVD, insert the DVD immediately after powering on the computer.

You can boot by:

    Configuring the machine BIOS to boot from either the DVD or USB.
    Typically boot by pressing F10, F11, F12, or Esc and select a boot device.

If your computer starts up by loading your existing operating system, then either:

    The installation media was not inserted early enough in the boot process. Ensure the installation media has been inserted, then restart the computer.
    The BIOS changes were not saved correctly. Review the BIOS settings and enable the correct boot setting.
    Your BIOS does not support booting from the desired media. 

As GhostBSD begins to boot, you will see a black screen with similar text to this:

![alt text](/source/user/installation-guide/images/Boot-Menu.png "Boot Menu")

## Installing

After you boot into the GhostBSD Live session, open a terminal window and start the installer with `gbi`. 
### Select Language

![alt text](/source/user/installation-guide/images/Installer-Select-Language.PNG "Select Language")

Select the language you would like to use after the installation. If a language is not provided in the selection, the language can be changed after login. 
Note: GBI will be multilingual in the future and the language who are display is default language some of us speak. 

### Keyboard Menu
 Selecting a keyboard layout and a variant
The layout option is your country-specific keyboard layout. 

![alt text](/source/user/installation-guide/images/Installer-Select-Keyboard-Layout.PNG "Keyboard Layout")

Note: If you use the default GhostBSD system keyboard setup you can skip by just click on forward. Also if you don't know your keyboard model and variant don't select any of those. 
### Time Zone
Setting the time zone for your machine will allow it to automatically correct for any regional time changes and perform other time zone related functions properly.

Selecting a Time Zone

Select a continent and the nearest city. 

![alt text](/source/user/installation-guide/images/Installer-Select-Timezone-Continent.PNG "Timezone Select")

### ZFS Full Disk Installation

![alt text](/source/user/installation-guide/images/Installer-Select-Installation-Type.png "Select Installation")

Choose the disk where GhostBSD is to be installed. 

![alt text](/source/user/installation-guide/images/Installer-ZFS-Full-Disk-Configuration.PNG "Install ZFS Full Disk")

Select an available boot option. 

![alt text](/source/user/installation-guide/images/Boot-Option.png "Boot Options")

### Adding Root Password and User
GhostBSD is designed to let the user have total control of the system, meaning that the user has root access by default and owns the entire system. GhostBSD installer lets the user choose a root password and lets them have complete access to the root account.
Setting Root Password
Password: The system password, also known as the root, superuser, or administrative password, is required for system administration tasks such as installing software, setting up your printer or changing settings that affect all users. You will need to remember this password for the times that you are prompted for it. The password is recommended as at least 8 characters, and you are required to type it in twice to confirm the password. 

![alt text](/source/user/installation-guide/images/Installer-Set-Root-Password.PNG "Root Password")

Adding User

Username: this is the name you will use when logging in. It can not contain spaces and is case sensitive

Full Name: It can be your full name and can contain capital letters and spaces.

Password: this is the password you will use when logging in. You must type it twice in order to confirm it.

Shell: bash (versions up to 3.5) or fish is set by default, you change to the one you prefer in the list.
Setting The System host name

Hostname: input the system's hostname. This name will be the system name of the network.

Figure 2.8b: Adding a user and hostname. 

![alt text](/source/user/installation-guide/images/Installer-User-Setup.PNG "User Setup")

## Installation progress
##### Installation Progress
Once you select Install to start the installation, a progress screen, seen in Figure 2.9b, provides a progress bar and messages so that you can watch the installation's progress.

![alt text](/source/user/installation-guide/images/Installer-Progress.png "Install Progress")

The installation time depends upon the speed of your hardware and the version of GhostBSD you choose. A typical installation takes between 10 and 30 minutes.

##### Installation Error
To help users find and fix this issue please see Installation Troubleshooting

##### Installation Success
![alt text](/source/user/installation-guide/images/Installer-Completed.PNG "Install Completed")
The screen shown in Figure 2.9d appears once the installation is successfully completed. 
Click the Restart button to reboot into your GhostBSD installation. Wait until the system exits the GUI before removing the installation media. 
## Installation Troubleshooting
Installing GhostBSD is usually an easy process that "just works". Sometimes, however, you will run into a problem. This section will look at solutions to the most common installation problems.
Installation Starts But Fails

The GhostBSD installer creates a log which keeps a record of all the steps that are completed as well as any errors. When an installation error occurs, the GhostBSD installer will ask if you would like to generate an error report. You should save the error log /tmp/pc-sysinstall.log to a USB stick so that you can read this log to see what went wrong.

If you can not figure out how to fix the error or believe that you have discovered an installation bug, please use the forum to get help.
System Does not Boot Into the Installer

If the live system does not make it to the GUI, try unplugging as many devices as possible, such as webcams, scanners, printers, USB mice and keyboards. If this solves the problem, plug in one piece of hardware at a time, then reboot. This will help you pinpoint which device is causing the problem.

If your computer freezes while probing hardware, and unplugging extra devices does not fix the problem, it is possible that the installation media is corrupt. If the checksum on the file you downloaded is correct, try burning the file again at a lower speed.

If the system freezes and you suspect the video card to be the cause, review your system's BIOS settings. If there is a setting for video memory, set it to its highest value. Also check to see if the BIOS is set to prefer built-in graphics or a non-existent graphics card. On some systems this is determined by the order of the devices listed; in this case, make sure that the preferred device is listed first. If you cannot see your BIOS settings you may need to move a jumper or remove a battery to make it revert to the default of built-in graphics; check your manual or contact your manufacturer for details.

If that change did not help, try rebooting and selecting option 2. Escape to loader prompt from the boot menu shown in Figure 2.10a below.

figure 2.10a: GhostBSD Boot Menu 
![alt text](/source/user/installation-guide/images/Boot-Menu.png "Boot Menu")
Selecting this option will open the boot loader prompt where you can type the following commands:

    unload
    disable-module vesa
    set module_path=/boot/kernel;/boot/modules;CONSOLE
    boot

Those commands will disable vesa before attempting to boot the live system.

A not uncommon cause for problems is the LBA (Logical Block Addressing) setting in the BIOS. If your PC is not booting up before or after installation, check your BIOS and turn LBA off (do not leave it on automatic).

If the SATA settings in your BIOS are set to "compatibility" mode, try changing this setting to "AHCI". If the system hangs with a BTX error, try turning off AHCI in the BIOS.
USB Keyboard Does not Work in Graphical Interface

If the USB keyboard is non-functional, check if there is an option in your BIOS for legacy support in relation to the keyboard or to USB, or both. Enabling this feature in your BIOS may solve this issue.
mountroot prompt

If you boot your system and you receive a mountroot> command prompt, it may be due to a change in the location of the boot device. This can occur when the installation was made on another machine and then transferring the HDD without an adjustment to the /etc/fstab file, or if a card reader is involved (including card readers on a USB dongle). The solution is to enter ufs:/dev/da1 at the prompt (it will always be ufs for the installer media). Depending on the exact location of the boot media, it may be different than da1. Typing ? at the prompt should display available devices.

If you boot your system and on single user mode receive the message Solaris: NOTICE: Cannot find the pool label for 'tank' with error 5. Its generaly a problem of delay with USB HDD. After having the <mountroot>, mount the zfs root file system : type zfs:tank/ROOT/initial. And then, in your /boot/loader.conf, add the line kern.cam.boot_delay="10000". That instructs the system to wait 10 seconds (10000 milliseconds) during boot to give time for the CAM subsystem probes to complete (USB storage devices use the CAM subsystem).
Getting Help
If none of the above has fixed your problem, search the GhostBSD forums to see if a solution exists, try a web search, or check the section Support. 
## Wrap Up
## What to do next

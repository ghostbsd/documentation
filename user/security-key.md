# Security Key configuration Guide

This document aims to cover the setup and configuration of security keys on GhostBSD. Security keys like YubiKey provide multiple authentication methods and security features that can be used for web authentication, system login, SSH access, and more.

```{contents} Table of Contents
:depth: 3
:local:
```

## FIDO2/WebAuthn Security Key Setup

This section will help you set up FIDO2/WebAuthn security keys (like YubiKeys) on GhostBSD. Security keys provide strong two-factor authentication for websites and services that support WebAuthn.

### What You'll Need

- A FIDO2/WebAuthn compatible security key (YubiKey, etc.)
- Administrator (root) access on your GhostBSD system
- A web browser (Firefox or Chromium)

### Step 1: Install Required Packages

Open a terminal and install the necessary packages:

```bash
sudo pkg install libu2f-host libfido2 u2f-devd
```

These packages provide:
- `libu2f-host`: Library for communicating with U2F/FIDO devices
- `libfido2`: Modern FIDO2/WebAuthn library and tools
- `u2f-devd`: Device management for security keys

### Step 2: Configure USB HID Support

#### Load USB HID Module

Add the USB HID module to your system's kernel module list:

```bash
sudo sysrc kld_list+="usbhid"
```

This command safely adds `usbhid` to the existing `kld_list` without overwriting other modules.

#### Disable Legacy USB HID

Edit the boot loader configuration:

```bash
sudo ee /boot/loader.conf
```

Add this line:

```
hw.usb.usbhid.enable="0"
```

This disables the legacy USB HID system in favor of the newer one.

### Step 3: Set Up User Permissions

Add your user account to the `u2f` group:

```bash
sudo pw group mod u2f -m yourusername
```

Replace `yourusername` with your actual username.

**Important:** You must reboot after making these changes for them to take effect.

### Step 4: Reboot Your System

```bash
sudo reboot
```

### Step 5: Test Your Security Key

After rebooting, plug in your security key and test it:

#### Find Your Security Key

```bash
fido2-token -L
```

You should see output like:
```
/dev/uhid3: vendor=0x1050, product=0x0407 (Yubico YubiKey OTP+FIDO+CCID)
```

#### Check Device Information

```bash
fido2-token -I /dev/uhid3
```

Replace `/dev/uhid3` with whatever device path was shown in the previous command.

### Step 6: Configure Your Browser

#### Firefox Configuration

1. Open Firefox
2. Type `about:config` in the address bar and press Enter
3. Click "Accept the Risk and Continue"
4. Search for each setting and change the values:

| Setting | Value |
|---------|-------|
| `security.webauth.u2f` | `true` |
| `security.webauth.webauthn` | `true` |
| `security.webauth.webauthn_enable_softtoken` | `true` |
| `security.webauth.webauthn_enable_usbtoken` | `true` |

5. Restart Firefox

#### Chromium Configuration

Chromium usually works with security keys without additional configuration on GhostBSD.

### Step 7: Test WebAuthn

1. Go to [WebAuthn.io](https://webauthn.io) in your browser
2. Click "Register" to test registration
3. Enter your security key PIN when prompted
4. Touch your security key when the browser requests it
5. Try "Authenticate" to test login

### Troubleshooting

#### Security Key Not Detected

If `fido2-token -L` doesn't show your key:

1. Try unplugging and reinserting the security key.

2. Check if you're in the correct groups:
   ```bash
   groups
   ```
   You should see `u2f` and `operator` in the output.

3. Check device permissions:
   ```bash
   ls -la /dev/uhid*
   ```
   Look for a device with group `u2f` or different permissions.

#### PIN Locked Error

If you see "security key is locked" or "wrong pin entered too many times":

1. Check PIN status:
   ```bash
   fido2-token -I /dev/uhid3
   ```
   Look for `pin retries: 0` in the output.

2. If PIN retries is 0, you need to reset the FIDO2 application:
   ```bash
   fido2-token -R /dev/uhid3
   ```
   **Warning:** This deletes all FIDO2 credentials on the key!

3. When the command runs, immediately touch and hold your security key for 3-5 seconds to confirm the reset.

4. Set a new PIN:
   ```bash
   fido2-token -S /dev/uhid3
   ```
   Enter your new PIN twice when prompted.

#### Browser Issues

**Firefox doesn't work but Chromium does:**
- Double-check the `about:config` settings
- Try restarting Firefox completely
- Clear Firefox cache and cookies for the website
- Try in a private/incognito window

**Neither browser works:**
- Verify your user is in the `u2f` group: `groups`
- Try with a different USB port

### Setting Up a PIN (Recommended)

For security, set up a PIN on your security key:

```bash
fido2-token -S /dev/uhid3
```

Choose a PIN that's at least 4 characters long. You'll need to enter this PIN when using the key for authentication.

### What's Next?

With your security key working, you can now:

- Enable two-factor authentication on websites that support WebAuthn/FIDO2
- Use SSH authentication with FIDO2 keys
- Set up system login with security keys (advanced)

### Common Commands Reference

| Command | Purpose |
|---------|---------|
| `fido2-token -L` | List available FIDO2 devices |
| `fido2-token -I /dev/uhidX` | Show device information |
| `fido2-token -S /dev/uhidX` | Set initial PIN |
| `fido2-token -C /dev/uhidX` | Change existing PIN |
| `fido2-token -R /dev/uhidX` | Reset FIDO2 application (deletes credentials) |
| `fido2-cred -L /dev/uhidX` | List stored credentials |

Remember to replace `/dev/uhidX` with your actual device path (usually `/dev/uhid3` for security keys).

### Security Notes

- Always set a PIN on your security key for additional security
- Keep backup authentication methods enabled on important accounts
- The reset command (`fido2-token -R`) permanently deletes all FIDO2 credentials
- Other functions on multi-purpose keys (like YubiKey OTP) are not affected by FIDO2 reset

---

**Need more help?** Visit the [GhostBSD Forums](https://forums.ghostbsd.org) for community support.
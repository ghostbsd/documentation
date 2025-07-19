# GhostBSD Versioning Guide

## Overview
GhostBSD uses a versioning scheme that clearly indicates which FreeBSD release it's based on, making it easier to track compatibility and updates.

## Versioning Format

The GhostBSD version format is: **`YY.PP.R##.#p#`**

### Components Breakdown:
- **`YY`**: Last two digits of the year (e.g., `25` for 2025)
- **`PP`**: GhostBSD patch version (incremental: `01`, `02`, `03`, etc.)
- **`R`**: Indicates this is a RELEASE version
- **`##.#`**: FreeBSD major and minor version (e.g., `14.2`)
- **`p#`**: FreeBSD patch level (`p0`, `p1`, `p2`, etc.)

### Example:
**`25.01.R14.2p1`** means:
- Released in **2025**
- **First** GhostBSD patch version of the year (`01`)
- Based on FreeBSD **RELEASE**
- Uses FreeBSD **14.2** base
- Includes FreeBSD patch level **p1**

---

## Version Examples

| GhostBSD Version | Release Year | Notes |
|------------------|--------------|-------|
| `25.01.R14.2p0` | 2025 | Based on initial 14.2 release |
| `25.01.R14.2p1` | 2025 | First patch level update |
| `25.02.R14.2p2` | 2025 | Updated for security patches |
| `25.03.R14.3p0` | 2025 | New FreeBSD minor version |

---

## Checking GhostBSD Version

```bash
# Check GhostBSD version
ghostbsd-version

# Direct file check
cat /etc/version
```

---

## Version Files in ghostbsd-src

### Key Version File:
- **`sys/conf/package-version`**: Contains the GhostBSD version string

### Version Flow:
1. `sys/conf/package-version` contains the GhostBSD version string
2. Build process uses this to create `/etc/version` in the final system
3. `ghostbsd-version` command reads `/etc/version`

---

## Release Lifecycle

### Regular Release Cycle:
1. **Update to new FreeBSD base**
2. **Testing and integration** of GhostBSD-specific features
3. **Update `sys/conf/package-version`** with new GhostBSD version
4. **Build and test** complete system
5. **Release** with updated version number

### Update Types:
- **Patch level updates**: Update FreeBSD patch (e.g., `25.01.R14.2p0` → `25.01.R14.2p1`)
- **GhostBSD updates**: Increment GhostBSD patch version (e.g., `25.01.R14.2p1` → `25.02.R14.2p1`)

---

## Branch Correlation

### Repository Branches vs. Versions:

| Repository Branch | GhostBSD Version Pattern |
|-------------------|-------------------------|
| `main` | Development builds |
| `stable/14` | Not released |
| `releng/14.2` | `25.01.R14.2p0`, `25.01.R14.2p1` |
| `releng/14.3` | `25.03.R14.3p0` |

---

## Developer Guidelines

### When Creating Releases:
1. **Update `sys/conf/package-version`**: Set the new GhostBSD version
2. **Test version commands**: Verify `ghostbsd-version` returns correct value
3. **Build and test**: Complete system build and testing
4. **Document changes**: Note any GhostBSD-specific modifications

### Version Verification:
```bash
# After building, verify version is correct
ghostbsd-version              # Should show new GhostBSD version
```
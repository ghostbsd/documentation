# Package Management Process

GhostBSD operates a three-tier package repository system that delivers stable packages to users while supporting continuous development and thorough testing.

## Repository Structure

GhostBSD maintains three distinct package repositories:

### Unstable Repository
- **Purpose**: Developer playground and experimental builds
- **Target Users**: Developers working on new features and ports
- **FreeBSD Base**: Tracks the next FreeBSD releng development branch (e.g., releng/15.0 when created)
- **Update Frequency**: Independent development builds
- **Risk Level**: High - experimental features and bleeding-edge development
- **Isolation**: Operates independently from testing and stable repositories

### Testing Repository  
- **Purpose**: Pre-production testing environment (what "unstable" was previously)
- **Target Users**: Contributors and community members who help test packages
- **FreeBSD Base**: Current stable FreeBSD release (e.g., 14.3-RELEASE)
- **Update Frequency**: Regular builds awaiting validation before user deployment
- **Risk Level**: Medium - packages undergo testing before reaching users

### Stable Repository
- **Purpose**: Production packages for end users
- **Target Users**: All GhostBSD users
- **FreeBSD Base**: Current stable FreeBSD release
- **Update Frequency**: Synchronized from testing after validation
- **Risk Level**: Low - fully tested and validated packages

## Package Flow

```
[Unstable]     [Testing] → [Stable]
     ↓              ↓          ↓
Development   Community   Production
(Independent)  Testing
```

### How Packages Move

1. **Unstable Repository (Independent Development)**
   - Developers build and test experimental features
   - Tracks the next FreeBSD releng development branch for early compatibility testing
   - Packages do not automatically flow to testing or stable
   - Provides early feedback on upcoming FreeBSD version compatibility

2. **Testing to Stable Flow**
   - Testing serves as the validation environment before user deployment
   - Packages undergo builds and testing in the testing repository
   - Only after thorough testing are packages synchronized to stable
   - Same repository build with testing gates before promotion to stable

## Package Repository Configuration

#### Stable (Default for Users)
```
GhostBSD: {
  url: "https://pkg.ghostbsd.org/stable/${ABI}/latest",
  signature_type: "pubkey",
  pubkey: "/usr/share/keys/ssl/certs/ghostbsd.cert",
  enabled: yes
}

GhostBSD-base: {
  url: "https://pkg.ghostbsd.org/stable/${ABI}/base",
  signature_type: "pubkey",
  pubkey: "/usr/share/keys/ssl/certs/ghostbsd.cert",
  enabled: yes
}
```

#### Testing (For Contributors and Community Testers)
```
GhostBSD: {
  url: "https://pkg.ghostbsd.org/testing/${ABI}/latest",
  signature_type: "pubkey",
  pubkey: "/usr/share/keys/ssl/certs/ghostbsd.cert",
  enabled: yes
}

GhostBSD-base: {
  url: "https://pkg.ghostbsd.org/testing/${ABI}/base",
  signature_type: "pubkey",
  pubkey: "/usr/share/keys/ssl/certs/ghostbsd.cert",
  enabled: yes
}
```

#### Unstable (For Developers)
```
GhostBSD: {
  url: "https://pkg.ghostbsd.org/unstable/${ABI}/latest",
  signature_type: "pubkey",
  pubkey: "/usr/share/keys/ssl/certs/ghostbsd.cert",
  enabled: yes
}

GhostBSD-base: {
  url: "https://pkg.ghostbsd.org/unstable/${ABI}/base",
  signature_type: "pubkey",
  pubkey: "/usr/share/keys/ssl/certs/ghostbsd.cert",
  enabled: yes
}
```

## System Benefits

### For Developers
- **Sandbox Environment**: Unstable provides an isolated development environment
- **Early FreeBSD Testing**: Developers test against the next FreeBSD releng development branch
- **No User Impact**: Development work does not affect testing or production users

### For Contributors and Community Testers
- **Focused Validation**: Testing repository focuses on pre-production validation
- **Stable Base**: Built on stable FreeBSD releases for consistent testing environments
- **Clear Gateway**: Serves as the final validation gate before user deployment

### For Users
- **Proven Stability**: Packages reach users only after community testing validation
- **Reliable Updates**: Community testing ensures package quality before deployment
- **Consistent Experience**: Built on stable FreeBSD releases

## Repository Operations

### FreeBSD Release Alignment

When FreeBSD creates a new releng development branch (e.g., `releng/15.0`):

1. **Unstable** switches to track the next FreeBSD releng development branch
2. **Testing** continues operating with current stable FreeBSD (14.3-RELEASE) 
3. **Stable** remains synchronized with testing

This operational model:
- Detects FreeBSD compatibility issues early in unstable
- Provides extended testing periods for major FreeBSD updates
- Ensures smooth transitions for end users via the testing→stable flow

### Development Operations

#### Experimental Development
- Developers operate in the unstable repository for experimental work
- Features are developed and tested against the next FreeBSD releng development branch
- No automatic promotion to testing occurs - requires deliberate decisions

#### Production Pipeline
1. Packages are built in testing repository
2. Community validation and testing procedures are applied
3. Successful packages are synchronized to stable for users

#### Security Updates (CVEs)
1. Security updates are built and tested in testing repository
2. Expedited community validation processes are applied
3. Quick synchronization to stable for security patches

## System Implementation

### Build Infrastructure
- Independent build environment for unstable (next FreeBSD releng development branch)
- Shared build infrastructure for testing/stable (same repository with different promotion stages)
- Automated synchronization mechanisms from testing to stable

### Testing Procedures
- Community testing in testing repository before stable promotion
- Validation gates before synchronization to stable
- Community-driven validation processes

### User Communication
- Documentation of repository purposes
- Guidelines for developers on unstable usage
- Release notes for testing→stable promotions

## Historical Context

GhostBSD's three-tier system addresses challenges from previous approaches:

- **Previous Two-Tier System**: Unstable served dual purposes of development and pre-production testing
- **Developer Isolation**: Developers now operate in an experimental environment without affecting the user pipeline
- **Testing Clarity**: Testing repository now operates as a focused pre-production environment

This system separates development experimentation from the user-focused testing→stable pipeline while giving developers early access to the next FreeBSD releng development branches.
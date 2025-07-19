# Maintaining GhostBSD Src from FreeBSD Src

## Purpose
This guide explains how to keep the GhostBSD src tree (https://github.com/ghostbsd/ghostbsd-src) current with the upstream FreeBSD src tree (https://github.com/freebsd/freebsd-src), manage stable and releng branches, resolve merge conflicts, and test changes before submission.

## Prerequisites
- Git installed and configured with SSH access to GitHub
- Basic understanding of Git commands and FreeBSD src structure
- A local working directory (e.g., `~/ghostbsd-src`)
- Understanding of FreeBSD's branching model (main → stable → releng)

---

## Step-by-Step Instructions

### 1. Clone the Repository and Configure Remotes
Clone the GhostBSD src repository using SSH:
```shell
git clone git@github.com:ghostbsd/ghostbsd-src.git
cd ghostbsd-src
```
Add the FreeBSD src repository as a remote:
```shell
git remote add freebsd https://github.com/freebsd/freebsd-src.git
```
Verify the remotes:
```shell
git remote -v
```
Expected output:
```
freebsd    https://github.com/freebsd/freebsd-src.git (fetch)
freebsd    https://github.com/freebsd/freebsd-src.git (push)
origin     git@github.com:ghostbsd/ghostbsd-src.git (fetch)
origin     git@github.com:ghostbsd/ghostbsd-src.git (push)
```

**Note**: If the `freebsd` remote is already set, skip the `git remote add` step.

---

### 2. Understanding Branch Management Strategy

GhostBSD follows a specific branching strategy to ensure safe integration with FreeBSD updates:

#### Branch Creation Timeline:
1. **Update `main`** before FreeBSD creates `stable/15`
2. **Create `stable/15`** from updated `main` after FreeBSD creates their `stable/15`
3. **Update `stable/14`** before FreeBSD creates any `releng/14.*`
4. **Create `releng/14.*`** from updated `stable/14` after FreeBSD creates their `releng/14.*`

#### Safe Merge Strategy:
- Always create a separate merge branch (e.g., `merge-freebsd/stable/15`) before merging
- Test the merge in the separate branch first
- Only create PR after conflicts are resolved and testing passes

---

### 3. Working with Main Branch

#### Update Main Branch:
```shell
git checkout main
git pull origin main
git fetch freebsd
git checkout -b merge-freebsd-main
git merge freebsd/main
```

**If conflicts occur**: Resolve them following the conflict resolution guidelines below.

**After successful merge and testing**:
```shell
# Create PR from merge-freebsd-main to main
git push origin merge-freebsd-main
# Create PR on GitHub
```

---

### 4. Creating and Maintaining Stable Branches

#### When FreeBSD Creates a New Stable Branch (e.g., stable/15):

1. **First, ensure main is up-to-date** (follow step 3)
2. **Create the stable branch from main**:
```shell
git checkout main
git pull origin main  # Ensure main is current
git checkout -b stable/15
git push origin stable/15
```

3. **Create merge branch and sync with FreeBSD**:
```shell
git checkout stable/15
git checkout -b merge-freebsd/stable/15
git fetch freebsd
git merge freebsd/stable/15
```

#### For Existing Stable Branches:
```shell
git checkout stable/14
git pull origin stable/14
git checkout -b merge-freebsd/stable/14
git fetch freebsd
git merge freebsd/stable/14
```

---

### 5. Creating and Maintaining Releng Branches

#### When FreeBSD Creates a New Releng Branch (e.g., releng/14.5):

1. **First, ensure stable/14 is up-to-date**:
```shell
git checkout stable/14
git pull origin stable/14
git fetch freebsd
git checkout -b merge-freebsd/stable/14
git merge freebsd/stable/14
# Resolve conflicts, test, create PR for stable/14 first
```

2. **Create releng branch from updated stable**:
```shell
git checkout stable/14
git pull origin stable/14  # After stable/14 PR is merged
git checkout -b releng/14.5
git push origin releng/14.5
```

3. **Create merge branch and sync with FreeBSD**:
```shell
git checkout releng/14.5
git checkout -b merge-freebsd/releng/14.5
git fetch freebsd
git merge freebsd/releng/14.5
```

#### Updating Releng Branches for Patch Levels (p1, p2, etc.):

When FreeBSD adds patch levels to existing releng branches (e.g., releng/14.2-p1):

1. **Update existing releng branch**:
```shell
git checkout releng/14.2
git pull origin releng/14.2
git checkout -b merge-freebsd/releng/14.2-p1
git fetch freebsd
git merge freebsd/releng/14.2
```

2. **Update GhostBSD version**:
```shell
# Update sys/conf/package-version to reflect new patch level
# Example: 25.01.R14.2p0 → 25.01.R14.2p1
# See the [GhostBSD Versioning Guide](versioning-guide.md) for version format details
```

3. **Test and create PR**:
```shell
# After resolving conflicts and testing
git push origin merge-freebsd/releng/14.2-p1
# Create PR to merge into releng/14.2
```

---

### 6. Resolve Merge Conflicts

Conflicts typically occur in GhostBSD-specific modifications. To find conflicts:
```shell
grep -R '<<<<<<< HEAD' .
```

**Resolution Guidelines**:
- **Always preserve GhostBSD customizations**: Keep our specific changes and fixes
- **If uncertain about a conflict**: Ask for guidance rather than guessing
- **Check the conflict context**: Understand what each side is trying to achieve
- **Test thoroughly**: Conflicts can introduce subtle bugs

Example conflict resolution:
```
<<<<<<< HEAD
# GhostBSD-specific changes (keep these)
=======
# FreeBSD changes (evaluate if compatible)
>>>>>>> freebsd/main
```

---

### 7. Testing Changes

Before submitting any changes, test the build:
```shell
make buildworld
make buildkernel
```

**Important**: Both commands must complete successfully before creating a PR.

If build errors occur:
1. Review the error messages
2. Check if GhostBSD customizations are conflicting with FreeBSD changes
3. Resolve the issues
4. Re-test the build

---

### 8. Submit Changes

After successful testing:

1. **Stage all changes**:
```shell
git add -A
```

2. **Commit changes**:
```shell
git commit -m "Merge FreeBSD [branch] updates

- Resolved conflicts in [files]
- Preserved GhostBSD customizations
- Build tested successfully"
```

3. **Push merge branch**:
```shell
git push origin merge-freebsd/[branch-name]
```

4. **Create Pull Request**:
- Create PR from `merge-freebsd/[branch-name]` to target branch
- Describe resolved conflicts and testing performed
- Await review and approval

:::{note}
Never push directly to `main`, `stable/*`, or `releng/*` branches. Always use the merge branch and PR workflow.
:::

---

## Branch Management Best Practices

### Timing Guidelines:
- **Monitor FreeBSD announcements** for new stable/releng branch creation
- **Update GhostBSD branches before** FreeBSD creates new branches when possible
- **Create branches promptly** after FreeBSD creates them to minimize drift

### Testing Requirements:
- **Always run full build tests** (`make buildworld buildkernel`)
- **Test in merge branches first** before creating PRs
- **Document any build issues** and their resolutions

### Conflict Resolution:
- **When in doubt, ask**: Don't guess about complex conflicts
- **Preserve GhostBSD identity**: Keep our customizations and branding
- **Document decisions**: Note why certain changes were kept or modified

---

## Common Issues and Solutions

- **Build Failures**: Check for GhostBSD-specific patches that may conflict with FreeBSD updates
- **Complex Conflicts**: Create a backup branch before attempting resolution
- **Branch Creation Timing**: If you miss the optimal timing, additional conflicts may occur but can still be resolved
- **Testing Environment**: Ensure your build environment matches the target architecture

---

## Emergency Procedures

If a merge branch becomes too complex:
1. **Create a backup**: `git checkout -b backup-merge-branch`
2. **Start fresh**: Return to the target branch and create a new merge branch
3. **Cherry-pick specific commits**: Apply only the changes that worked
4. **Ask for help**: Complex situations may require collaborative resolution
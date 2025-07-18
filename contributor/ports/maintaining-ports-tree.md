# Maintaining GhostBSD Ports from FreeBSD Ports

## Purpose
This guide explains how to keep the GhostBSD ports tree (https://github.com/ghostbsd/ghostbsd-ports) current with the upstream FreeBSD ports tree (https://github.com/freebsd/freebsd-ports), resolve merge conflicts, and test changes before submission.

## Prerequisites
- Git installed and configured with access to GitHub.
- Basic understanding of Git commands and FreeBSD ports structure.
- `poudriere` installed for testing (optional but recommended).
- A local working directory (e.g., `~/ghostbsd-ports`).

---

## Step-by-Step Instructions

### 1. Clone the Repository and Configure Remotes
Clone the GhostBSD ports repository if you don’t already have it:
```shell
git clone https://github.com/ghostbsd/ghostbsd-ports.git
cd ghostbsd-ports
```
Add the FreeBSD ports repository as a remote:
```shell
git remote add freebsd https://github.com/freebsd/freebsd-ports.git
```
Verify the remotes:
```shell
git remote -v
```
Expected output:
```
freebsd    https://github.com/freebsd/freebsd-ports.git (fetch)
freebsd    https://github.com/freebsd/freebsd-ports.git (push)
origin     https://github.com/ghostbsd/ghostbsd-ports.git (fetch)
origin     https://github.com/ghostbsd/ghostbsd-ports.git (push)
```

**Note**: If the `freebsd` remote is already set, skip the `git remote add` step.

---

### 2. Create a New Working Branch
Always work in a feature branch to keep `master` clean:
```shell
git checkout master
git pull origin master  # Ensure your local master is up-to-date
git checkout -b my-branch-name
```
- Replace `my-branch-name` with a descriptive name (e.g., `sync-freebsd-20250403`).
- This isolates your changes and simplifies pull requests.

---

### 3. Fetch and Merge FreeBSD Ports
Fetch the latest changes from FreeBSD:
```shell
git fetch freebsd
```
Merge FreeBSD’s `main` branch into your branch:
```shell
git merge freebsd/main
```

- **If no conflicts occur**: Proceed to Step 5 (Testing).
- **If conflicts occur**: Continue to Step 4 (Resolving Conflicts).
---

### 4. Resolve Merge Conflicts
Conflicts typically come from GhostBSD-specific changes (e.g., `Mk` files, `Makefiles`). FreeBSD updates, like renamed or removed directories, can also affect merges. Check https://github.com/freebsd/freebsd-ports for upstream changes. To find code conflicts:
```bash
grep -R '<<<<<<< HEAD' .
```
This lists files with conflicts, marked like:
```
<<<<<<< HEAD
# GhostBSD-specific changes (your code)
=======
# FreeBSD changes (upstream code)
>>>>>>> freebsd/master
```

**Resolution Tips**:
- Code conflicts require ports maintenance knowledge but are usually easy—often just changes Git can’t auto-merge.
- **Keep GhostBSD changes**: Always preserve our customizations (e.g., in `Mk` files or `Makefiles`, the most common conflict sources), especially fixes made before FreeBSD or changes to default options.
- **Resolve `PORTVERSION` conflicts**: For `Makefile` `PORTVERSION`, use FreeBSD’s version (e.g., `1.2.4`) unless a comment above ours (e.g., `# Keep 1.2.3 for GhostBSD fix`) says to keep it.
- **Handle directory conflicts**: If FreeBSD renamed or removed a directory, ensure all files are moved to the new location and remove the old directory (use `git status` to spot added/removed files).

### 5. Test the Ports Tree (Dry Run)
Before committing, test the updated ports tree with `poudriere`:
```shell
sudo poudriere bulk -j ghostbsd-amd64 -p ghostbsd-ports -an
```
- `-j ghostbsd-amd64`: Specifies the jail (adjust if different).
- `-p ghostbsd-ports`: Uses your local ports tree.
- `-an`: Dry run (analyzes without building).

Check the output for errors. If issues arise, fix the affected ports and repeat.

### 6. Commit and Push Changes
Stage all changes:
```shell
git add -A
```
Commit changes:
```shell
git commit
```
Push to your branch:
```shell
git push origin my-branch-name
```

### 7. Submit Changes
- Create a pull request (PR) on GitHub from `my-branch-name` to `ghostbsd-ports/master`.
- Describe the changes and any resolved conflicts in the PR.
- Await review and approval from maintainers.

:::{note}
Do not push directly to `master` unless you’re a maintainer with explicit permission.
:::

## Common Issues and Solutions
- **Conflict in `Mk` Files**: FreeBSD may update build infrastructure. Retain GhostBSD-specific tweaks (e.g., custom `USES` flags).
- **Renamed/Removed Directories**: If FreeBSD renamed or removed a directory, ensure all files are moved to the new location and delete the old directory during conflict resolution.
- **Testing Fails**: Check `poudriere` logs (e.g., `/usr/local/poudriere/data/logs/bulk`) for clues.

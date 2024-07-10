GhostBSD Contributor's Guide
============================

## 1. Introduction
Welcome to the GhostBSD Contributor’s Guide. This guide outlines the responsibilities, workflows, and best practices for contributors, helping maintain the quality and consistency of the GhostBSD project. Being a committer allows you to directly contribute to the project’s growth and collaborate with a dedicated community.

## 2. Becoming An Official Contributor
### 2.1. Eligibility
Anyone who has the interest to help the project can become a contributor. You must become a New Contributor first and have demonstrated a consistent track record of quality contributions to the GhostBSD project.
### 2.2. Mentorship Program
New committers will be assigned a mentor by the project maintainers to guide them through the initial stages, ensuring they understand the project’s standards and workflows.
### 2.3. Trial Ending
Once the mentor thinks the new contributor understands the project’s standards and workflows well the new contributor will become a contributor.

## 3. Contributor Responsibilities
### 3.1. Code Contributions
Ensure your code contributions are well-tested and adhere to the project’s coding standards.
### 3.2. Code Reviews
Participate in code reviews to help maintain code quality and mentor new contributors.
### 3.3. Documentation
Update and improve documentation as part of your contributions.
### 3.4. Community Engagement
Engage with the community by participating in discussions, answering questions, and providing support.

## 4. Using GitHub
### 4.1. Repository Structure
Understand the structure of the GhostBSD repositories and where to find relevant code and documentation.
### 4.2. Branching Strategy
Follow the project’s branching strategy for development, feature, and release branches:
* **main**: Stable release branch.
* **develop**: Ongoing development branch.
* **feature/xxx**: Feature branches for new developments.
### 4.3. Cloning Repositories
Clone the main repository:
```
git clone git@github.com:ghostbsd/ghostbsd.git
```
### 4.4. Handling Merge Conflicts
Resolve conflicts using Git:
```
git fetch origin
git checkout feature/branch
git merge origin/main
# Resolve conflicts
git add -A
git commit
```

## 5. Commit Messages
### 5.1. Format
Use the following format for commit messages:
```
Subject Line (50 characters or less)

Detailed explanation of the changes, reasons for the changes, and any additional
information that might be useful.
```
### 5.2. Best Practices
* Use the imperative mood in the subject line (e.g., "Fix bug" not "Fixed bug").
* Include relevant issue numbers for traceability.
### 5.3. Examples
* Good: Fix issue #123: Correct memory leak in network module
* Bad: Fixed stuff

## 6. Working With Pull Requests
### 6.1. Creating a Pull Request
Ensure your pull request is well-documented and includes relevant tests.
### 6.2. Reviewing Pull Requests
Provide constructive feedback and ensure the code meets project standards.
### 6.3. Merging Pull Requests
Merge pull requests only after they have been reviewed and approved by at least one other contributor.
### 6.4. Handling Complex Pull Requests
* Breaking Down PRs: Divide large PRs into smaller, manageable parts.
* Managing Dependencies: Ensure dependent PRs are noted and reviewed in order.

## 7. Code Reviews
### 7.1. Purpose
Code reviews help maintain code quality and ensure adherence to project standards.
### 7.2. Process
Review code for correctness, readability, and adherence to coding standards. Provide feedback and request changes if necessary.
### 7.3. Checklist
• Compliance with coding standards.
• Adequate test coverage.
• Clear commit messages and documentation updates.

## 8. Handling Bug Reports
### 8.1. Triage
Prioritize and categorize bug reports based on severity and impact.
### 8.2. Resolution
Work on resolving bugs in a timely manner, ensuring that fixes are well-tested.
### 8.3. Examples
• High Priority: Critical system crashes.
• Medium Priority: Functionality issues.
• Low Priority: Minor UI bugs.

## 9. Testing And Quality Assurance
### 9.1. Automated Testing
Ensure your changes pass all relevant automated tests.
### 9.2. Manual Testing
Perform manual testing when necessary, especially for user-facing features.
### 9.3. Continuous Integration
Make use of the project’s continuous integration system to verify your changes.
### 9.4. Guidelines for Writing Tests
• Use testing frameworks.
• Include unit tests for new features.

## 10. Documentation
### 10.1. Updating Documentation
Ensure that all changes are reflected in the relevant documentation.
### 10.2. Writing New Documentation
Write clear, concise, and comprehensive documentation for new features and changes.
### 10.3. Standards
• Use Markdown for documentation.
• Follow the project’s style guide.
### 10.4. Tools
• MkDocs for documentation management.

## 11. Communication And Conduct
### 11.1. Code of Conduct
Adhere to the project’s code of conduct in all interactions.
### 11.2. Communication Channels
Use appropriate channels (mailing lists, forums, chat) for discussions and announcements.
### 11.3. Examples of Proper Etiquette
• Respectful and constructive communication.
• Professionalism in all interactions.

## 12. Resources
### 12.1. Documentation
Access the project’s documentation portal for guidelines and references.
### 12.2. Tools
Recommended tools and utilities for development: * IDEs: VSCode, Sublime Text * Debugging Tools: GDB, LLDB
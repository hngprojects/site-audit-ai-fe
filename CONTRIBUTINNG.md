# Contributing to SiteMate AI

Thank you for your interest in contributing to SiteMate AI! We're excited to have you here. This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher)
- **Git**

### Setting Up Your Development Environment

1. **Fork the repository** to your GitHub account

2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/sitemate-ai.git
   cd sitemate-ai
   ```

3. **Add the upstream repository**:

   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/sitemate-ai.git
   ```

4. **Install dependencies**:

   ```bash
   pnpm install
   ```

5. **Start the development server**:

   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to verify everything is working

## Development Workflow

### Branching Strategy

1. **Always work on a new branch** for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Branch naming conventions**:
   - `feature/` - New features (e.g., `feature/add-dashboard`)
   - `fix/` - Bug fixes (e.g., `fix/login-error`)
   - `docs/` - Documentation updates (e.g., `docs/update-readme`)
   - `refactor/` - Code refactoring (e.g., `refactor/optimize-api`)
   - `test/` - Adding or updating tests (e.g., `test/add-unit-tests`)

### Keeping Your Fork Updated

Regularly sync your fork with the upstream repository:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid using `any` type unless absolutely necessary
- Use meaningful variable and function names

### Code Style

We use **Prettier** and **ESLint** to maintain consistent code style.

Before committing, run:

```bash
# Check for linting errors
pnpm lint

# Format your code
pnpm format
```

### Component Guidelines

- Use functional components with hooks
- Keep components small and focused on a single responsibility
- Place reusable components in `/components`
- Use Radix UI primitives for accessible UI components
- Style with Tailwind CSS utility classes

### File Structure

```
app/              # Next.js App Router pages
components/       # Reusable React components
lib/             # Utility functions and helpers
public/          # Static assets
types/           # TypeScript type definitions
```

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates

### Examples

```bash
feat(dashboard): add website health score visualization

fix(api): resolve timeout issue in health check endpoint

docs(readme): update installation instructions
```

## Pull Request Process

### Before Submitting

1. **Test your changes thoroughly**
2. **Run linting and formatting**:
   ```bash
   pnpm lint
   pnpm format
   ```
3. **Ensure the build succeeds**:
   ```bash
   pnpm build
   ```
4. **Update documentation** if needed

### Submitting a Pull Request

1. **Push your branch** to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub with:
   - A clear title describing the change
   - A detailed description of what changed and why
   - Screenshots or GIFs for UI changes
   - Reference to any related issues (e.g., "Closes #123")

3. **PR Template**:

   ```markdown
   ## Description

   Brief description of changes

   ## Type of Change

   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing

   How has this been tested?

   ## Screenshots (if applicable)

   ## Checklist

   - [ ] Code follows project style guidelines
   - [ ] Self-review completed
   - [ ] Comments added for complex code
   - [ ] Documentation updated
   - [ ] No new warnings generated
   - [ ] Tests added/updated
   ```

4. **Respond to feedback** promptly and make requested changes

5. **Once approved**, a maintainer will merge your PR

## Issue Reporting

### Before Creating an Issue

- Search existing issues to avoid duplicates
- Ensure you're using the latest version

### Creating a Good Issue

Include:

- **Clear title** summarizing the problem
- **Steps to reproduce** the issue
- **Expected behavior**
- **Actual behavior**
- **Screenshots or error messages**
- **Environment details** (OS, browser, Node version)

### Issue Templates

**Bug Report:**

```markdown
**Describe the bug**
A clear description of the bug

**To Reproduce**

1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**

- OS: [e.g., macOS]
- Browser: [e.g., Chrome 120]
- Node version: [e.g., 18.17.0]
```

**Feature Request:**

```markdown
**Is your feature request related to a problem?**
Description

**Describe the solution you'd like**
Clear description

**Additional context**
Any other relevant information
```

## Questions?

If you have questions or need help, feel free to:

- Open an issue with the `question` label
- Reach out to the maintainers

## Recognition

All contributors will be recognized in our project. Thank you for making SiteMate AI better!

---

**Happy Contributing! 🚀**

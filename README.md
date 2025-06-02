<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=Ecosystem&background=tiles&project=library-name" alt="solid-create-script">
</p>

# Template: SolidJS Bun Monorepo

Template for [SolidJS](https://www.solidjs.com/) monorepo. Bundling of the monorepo packages is managed by [tsup](https://tsup.egoist.dev/).

This monorepo template includes:

- Bun
- TypeScript / ESLint / Oxfmt
- Two apps: Playground and Storybook
- Two template packages: Hello A + Hello B
- Solid Testing Library + Vitest (for testing packages)
- Support for publishing to NPM and JSR
- GitHub Actions (for all CI/CD)

## Getting Started

Some pre-requisites before install dependencies:

- Install Node Version Manager (NVM)
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  ```
- Install Bun
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

### Installing Dependencies

```bash
nvm use
bun install
```

### Linting & Formatting

```bash
bun run lint    # checks source for lint violations
bun run format  # checks source for format violations

bun run lint:fix    # fixes lint violations
bun run format:fix  # fixes format violations
```

### Start Scripts

```bash
bun run playground    # Runs playground app
bun run storybook     # Runs storybook app
bun run dev           # Runs both in parallel
```

### Building Packages

This template uses [tsup-preset-solid](https://github.com/solidjs-community/tsup-preset-solid) to build and bundle the library packages.

```bash
bun run build:pkg   # builds all packages
```

### Publishing Packages

This template comes with [Changesets](https://github.com/changesets/changesets) pre-configured for versioning and publishing to both NPM and JSR.

```bash
bun run pkg:changeset  # run Changeset CLI to create a changeset
bun run pkg:version    # consume changesets to bump package.json and jsr.json versions
bun run pkg:publish    # build, publish to NPM via Changeset, then publish to JSR
```

The `pkg:version` script automatically syncs `jsr.json` versions with `package.json` versions across all packages after Changeset runs.

### Contributing

The only requirements when contributing are:

- You keep a clean git history in your branch
  - rebasing `main` instead of making merge commits.
- Using proper commit message formats that adhere to [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
  - Additionally, squashing (via rebase) commits that are not [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- CI checks pass before merging into `main`

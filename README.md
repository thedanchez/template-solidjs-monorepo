<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=Ecosystem&background=tiles&project=library-name" alt="solid-create-script">
</p>

# Template: SolidJS Bun Turborepo

Template for [SolidJS](https://www.solidjs.com/) monorepo. Bundling of the monorepo packages is managed by [tsup](https://tsup.egoist.dev/).

This monorepo template includes:

- Bun + Turborepo
- TypeScript / ESLint / Prettier
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
turbo lint    # checks source for lint violations
turbo format  # checks source for format violations

turbo lint:fix    # fixes lint violations
turbo format:fix  # fixes format violations
```

### Start Scripts

```bash
turbo playground    # Runs playground app
turbo storybook     # Runs storybook app
```

### Building Packages

This template uses [tsup-preset-solid](https://github.com/solidjs-community/tsup-preset-solid) to build and bundle the library packages.

```bash
bun run build:pkg   # uses turbo run build under the hood (filtering to packages/*)
```

> If you want to have specific build scripts for individual packages, feel free to follow the examples in `package.json`

### Publishing Packages

This template also comes with Changeset pre-configured and three utility scripts. You must have Changeset installed to leverage them.

```bash
bun pkg:changeset # run Changeset CLI
bun pkg:version   # consume any changeset to produce package manifest updates
bun pkg:publish   # git tag and publish the package to NPM via Changeset
```

Another thing to note is the template includes a `jsr.json` config to support publishing to JSR alongside NPM if interested. To publish to JSR, you can run:

```bash
bunx jsr publish            # publishes to JSR
bunx jsr publish --dry-run  # checks if library is publishable
```

> Note: For JSR publishing, Changeset does not update the jsr.json file after running `bun pkg:publish` so you have to manually update the version by hand after changeset has run.

### Contributing

The only requirements when contributing are:

- You keep a clean git history in your branch
  - rebasing `main` instead of making merge commits.
- Using proper commit message formats that adhere to [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
  - Additionally, squashing (via rebase) commits that are not [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- CI checks pass before merging into `main`

Welcome to YouTube.js! We're thrilled to have you interested in contributing to our project. As a community-driven project, we believe in the power of collaboration and look forward to working with you. To get started, please follow our easy-to-follow guidelines:

## Issues

### Creating a new issue
Before creating a new issue, we recommend searching for similar or related issues to avoid duplication efforts. However, if you can't find one, you're more than welcome to create a new issue using a relevant issue form. Please make sure to describe the issue as clearly and concisely as possible.

### Solving an issue
If you want to lend a hand by solving an issue, it's always good to browse existing issues to find one that grabs your attention. You can narrow down the search using tags as filters. If you find an issue you'd like to help with, please feel free to open a Pull Request with a fix. We appreciate documentation updates and grammar fixes too!

## Making Changes

1. Fork the repository on GitHub.
2. Ensure that you have the latest Node.js v16 version installed.
3. Create a working branch and start making your changes and improvements!

### Committing updates
When you're done with the changes, make sure to commit them. Don't forget to write a clear, descriptive commit message. We recommend following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

### Creating a Pull Request
Once you're happy with your updates, create a pull request on GitHub. This is the most efficient way to get your contribution reviewed and eventually merged into our codebase.

- Use the pull request template to fill in the necessary details.
- If you're solving an issue, link the pull request to that issue.
- Enable the checkbox to allow maintainers to edit the branch and update it for merging.
- Changes may be required before we can merge your changes, and we'll let you know what needs to be done.

### Testing, Linting, and Building
We have some automated processes set up for testing, linting, and building. Please run the following commands to test, lint, and build your code before submitting it:

Testing:
```sh
npm run test
```

Linting:
```sh
npm run lint
```

Building:
```sh
# Build all
npm run build

# Protobuf
npm run build:proto

# Parser map
npm run build:parser-map

# Deno
npm run build:deno

# ES Module
npm run build:esm

# Node
npm run bundle:node

# Browser
npm run bundle:browser
npm run bundle:browser:prod
```

We appreciate your efforts and contributions to YouTube.js! Together, we can make this project even better.
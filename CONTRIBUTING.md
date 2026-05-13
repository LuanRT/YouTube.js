## Issues

### Creating a new issue
Before creating a new issue, search for similar or related issues to avoid duplication efforts. If you can't find one, you're more than welcome to create a new issue using a relevant form, and please make sure to describe the issue as clearly as possible.

### Solving an issue
If you want to help solve an issue, it's always good to browse existing issues to find one that grabs your attention, you can narrow down the search using tags as filters. Simple documentation updates and grammar fixes are welcome too.

## Making Changes

1. Fork the repository on GitHub.
2. Ensure that you have the latest Node.js version installed.
3. Create a working branch and start making your changes!

### Committing Your Changes
When you're done with the changes, make sure to commit them. Don't forget to write a clear, descriptive commit message. We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

### Creating a Pull Request
Once you're happy with your changes, create a pull request on GitHub.

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
npm run lint:fix
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

# Browser
npm run bundle:browser
```

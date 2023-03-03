# Contributing to YouTube.js

Thank you for taking the time to contribute! 
The following is a set of guidelines for contributing to YouTube.js.
___
- [Contributing to YouTube.js](#contributing-to-youtubejs)
  - [Issues](#issues)
      - [Create a new issue](#create-a-new-issue)
      - [Solve an issue](#solve-an-issue)
  - [Make changes](#make-changes)
      - [Commit your updates](#commit-your-updates)
      - [Pull Request](#pull-request)
      - [Test](#test)
      - [Lint](#lint)
      - [Build](#build)
  
## Issues

<a id="issue-1"></a>
#### Create a new issue
If you find a problem, search if an issue already exists. If a related issue doesn't exist, you can open a new issue using a relevant issue form.

<a id="issue-2"></a>
#### Solve an issue
Scan through the existing issues to find one that interests you. You can narrow down the search using labels as filters. If you find an issue to work on, you are welcome to open a PR with a fix. Documentation updates and grammar fixes are also appreciated!

<a id="changes"></a>
## Make changes

1. Fork the repository 
2. Install or update to **Node.js v16**
3. Create a working branch and start with your changes!

<a id="changes-1"></a>
#### Commit your updates

Commit the changes once you're happy with them.

<a id="changes-2"></a>
#### Pull Request

When you think the code is ready for review a pull request should be created on Github. Owners of the repository will watch out for new PR‘s and review them in regular intervals.

- Fill the template.
- Link the PR to an issue, if you are solving one.
- Enable the checkbox to allow maintainer edits so the branch can be updated for a merge.
- Changes may be requested before a PR can be merged.
- As you update your PR and apply changes, mark each conversation as resolved.

<a id="test"></a>
#### Test

```bash
npm run test
```

<a id="lint"></a>
#### Lint

```bash
npm run lint
npm run lint:fix
```

<a id="build"></a>
#### Build

```bash
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
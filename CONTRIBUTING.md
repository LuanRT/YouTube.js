# Contributing to YouTube.js

Thank you for taking the time to contribute! 
The following is a set of guidelines for contributing to YouTube.js.
___
* [Issues](#issues)
  * [Create a new issue](#issue-1)
  * [Solve an issue](#issue-2)

* [Make changes](#changes)
  * [Commit your updates](#changes-1)
  * [Create a PR](#changes-2)
  * [Run tests](#test)
  * [Lint your code](#lint)
  * [Build for node](#build-1)
  * [Bundle for browsers](#build-2)
  * [Compile proto file](#build-3)
  * [Build parser map](#build-4)
  
## Issues

<a id="issue-1"></a>
#### Create a new issue
If you find a problem, search if an issue already exists. If a related issue doesn't exist, you can open a new issue using a relevant issue form.

<a id="issue-2"></a>
#### Solve an issue
Scan through the existing issues to find one that interests you. You can narrow down the search using labels as filters. If you find an issue to work on, you are welcome to open a PR with a fix.

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
```

Or

```bash
npm run lint:fix
```

<a id="build-1"></a>
#### Build for Node

```bash
npm run build:node
```

<a id="build-2"></a>
#### Build for browsers 

```bash
npm run build:browser
```
Or:
```bash
npm run build:browser:prod
```

<a id="build-3"></a>
#### Compile proto file

```bash
// TODO
```

<a id="build-4"></a>
#### Build parser map

```bash
npm run build:parser-map
```

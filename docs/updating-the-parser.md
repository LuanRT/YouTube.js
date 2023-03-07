# Updating the parser

YouTube is constantly changing, so it is not rare to see YouTube crawlers/scrapers breaking every now and then.

Our parser, on the other hand, was written so that it behaves similarly to an official client, parsing and mapping renderers (a.k.a YTNodes) dynamically without hard-coding their path in the response. This way, whenever a new renderer pops up (e.g; YouTube adds a new feature / minor UI changes) the library will print a warning similar to this:

```
InnertubeError: SomeRenderer not found!
This is a bug, want to help us fix it? Follow the instructions at https://github.com/LuanRT/YouTube.js/blob/main/docs/updating-the-parser.md or report it at https://github.com/LuanRT/YouTube.js/issues!
    at Parser.printError (...)
    at Parser.parseItem (...)
    at Parser.parseArray (...) {
  info: {
    // renderer data, can be used as a reference to implement the renderer parser
  },
  date: 2022-05-22T22:16:06.831Z,
  version: '2.2.3'
}
```

This warning **does not** throw an error. The parser itself will continue working normally, even if a parsing error occurs in an existing renderer parser.

## Adding a new renderer parser

Thanks to the modularity of the parser, a renderer can be implemented by simply adding a new file anywhere in the [classes directory](../src/parser/classes)!

For example, say we found a new renderer named `verticalListRenderer`, to let the parser know it exists we would have to create a file with the following structure:

> `../classes/VerticalList.ts`

```ts
import Parser from '..';
import { YTNode } from '../helpers';
import type { RawNode } from '../index.js';

class VerticalList extends YTNode {
  static type = 'VerticalList';

  header;
  contents;

  constructor(data: RawNode) {
    // parse the data here, ex;
    this.header = Parser.parseItem(data.header);
    this.contents = Parser.parseArray(data.contents);
  }
}

export default VerticalList;
```

Then update the parser map:

```bash
npm run build:parser-map
```

And that's it!

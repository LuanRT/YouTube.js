# Updating the Parser

YouTube is constantly changing, so it is not uncommon to see YouTube crawlers/scrapers breaking every now and then.

Our parser, on the other hand, was written so that it behaves similarly to an official client, parsing and mapping renderers (also known as YTNodes) dynamically without hard-coding their path in the response. This way, whenever a new renderer pops up (e.g., when YouTube adds a new feature or makes a minor UI change), the library will print a warning similar to this:

```
SomeRenderer not found!
This is a bug, want to help us fix it? Follow the instructions at https://github.com/LuanRT/YouTube.js/blob/main/docs/updating-the-parser.md or report it at https://github.com/LuanRT/YouTube.js/issues!
Introspected and JIT generated this class in the meantime:
class SomeRenderer extends YTNode {
  static type = 'SomeRenderer';

  // ...

  constructor(data: RawNode) {
    super();
    // ...
  }
}
```

This warning **does not** throw an error. The parser itself will continue working normally, even if a parsing error occurs in an existing renderer parser.

## Adding a New Renderer Parser

Thanks to the modularity of the parser, a renderer can be implemented by simply adding a new file anywhere in the [classes directory](../src/parser/classes)!

For example, suppose we have found a new renderer named `verticalListRenderer`. In that case, to let the parser know it exists at compile-time, we would have to create a file with the following structure:

> `../classes/VerticalList.ts`

```ts
import { Parser, RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

export default class VerticalList extends YTNode {
  static type = 'VerticalList';

  header;
  contents;

  constructor(data: RawNode) {
    super();
    // parse the data here, ex;
    this.header = Parser.parseItem(data.header);
    this.contents = Parser.parseArray(data.contents);
  }
}
```

You may use the parser's generated class for the new renderer as a starting point for your own implementation.

Then update the parser map:

```bash
npm run build:parser-map
```

And that's it!

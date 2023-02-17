import Parser from '../index.ts';

import { YTNode } from '../helpers.ts';

class RichGrid extends YTNode {
  static type = 'RichGrid';

  header;
  contents;

  constructor(data: any) {
    super();
    // XXX: we don't parse the masthead since it is usually an advertisement
    // XXX: reflowOptions aren't parsed, I think its only used internally for layout
    this.header = Parser.parseItem(data.header);
    this.contents = Parser.parseArray(data.contents);
  }
}

export default RichGrid;
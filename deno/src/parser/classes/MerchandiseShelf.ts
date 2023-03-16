import { YTNode } from '../helpers.ts';
import Parser, { RawNode } from '../index.ts';

class MerchandiseShelf extends YTNode {
  static type = 'MerchandiseShelf';

  title: string;
  menu;
  items;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.menu = Parser.parseItem(data.actionButton);
    this.items = Parser.parseArray(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default MerchandiseShelf;
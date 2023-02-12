import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class MerchandiseShelf extends YTNode {
  static type = 'MerchandiseShelf';

  title: string;
  menu;
  items;

  constructor(data: any) {
    super();
    this.title = data.title;
    this.menu = Parser.parse(data.actionButton);
    this.items = Parser.parse(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default MerchandiseShelf;
import Parser from '../index.js';

import { YTNode } from '../helpers.js';

class MusicSideAlignedItem extends YTNode {
  static type = 'MusicSideAlignedItem';

  start_items?;
  end_items?;

  constructor(data: any) {
    super();

    if (data.startItems) {
      this.start_items = Parser.parseArray(data.startItems);
    }

    if (data.endItems) {
      this.end_items = Parser.parseArray(data.endItems);
    }
  }
}

export default MusicSideAlignedItem;
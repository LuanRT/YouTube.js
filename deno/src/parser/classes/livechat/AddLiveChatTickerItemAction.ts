import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

class AddLiveChatTickerItemAction extends YTNode {
  static type = 'AddLiveChatTickerItemAction';

  item;
  duration_sec: string; // TODO: check this assumption

  constructor(data: RawNode) {
    super();
    this.item = Parser.parseItem(data.item);
    this.duration_sec = data.durationSec;
  }
}

export default AddLiveChatTickerItemAction;
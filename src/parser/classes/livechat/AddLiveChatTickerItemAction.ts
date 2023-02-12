import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';

class AddLiveChatTickerItemAction extends YTNode {
  static type = 'AddLiveChatTickerItemAction';

  item;
  duration_sec: string; // TODO: check this assumption

  constructor(data: any) {
    super();
    this.item = Parser.parseItem(data.item);
    this.duration_sec = data.durationSec;
  }
}

export default AddLiveChatTickerItemAction;
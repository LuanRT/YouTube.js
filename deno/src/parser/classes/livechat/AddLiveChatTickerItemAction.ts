import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';

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
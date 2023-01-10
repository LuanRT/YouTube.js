import Parser from '../../index';
import { YTNode } from '../../helpers';

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
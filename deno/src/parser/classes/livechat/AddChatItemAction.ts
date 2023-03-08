import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

class AddChatItemAction extends YTNode {
  static type = 'AddChatItemAction';

  item;
  client_id: string | null;

  constructor(data: RawNode) {
    super();
    this.item = Parser.parseItem(data.item);
    this.client_id = data.clientId || null;
  }
}

export default AddChatItemAction;
import Parser from '../../index';
import { YTNode } from '../../helpers';

class AddChatItemAction extends YTNode {
  static type = 'AddChatItemAction';

  item;
  client_id: string | null;

  constructor(data: any) {
    super();
    this.item = Parser.parseItem(data.item);
    this.client_id = data.clientId || null;
  }
}

export default AddChatItemAction;
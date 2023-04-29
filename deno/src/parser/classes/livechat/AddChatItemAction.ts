import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class AddChatItemAction extends YTNode {
  static type = 'AddChatItemAction';

  item: YTNode;
  client_id?: string;

  constructor(data: RawNode) {
    super();
    this.item = Parser.parseItem(data.item);
    if (Reflect.has(data, 'clientId')) {
      this.client_id = data.clientId;
    }
  }
}
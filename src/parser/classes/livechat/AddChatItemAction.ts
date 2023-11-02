import { Parser } from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

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
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
class DimChatItemAction extends YTNode {
  static type = 'DimChatItemAction';

  client_assigned_id: string;

  constructor(data: RawNode) {
    super();
    this.client_assigned_id = data.clientAssignedId;
  }
}

export default DimChatItemAction;
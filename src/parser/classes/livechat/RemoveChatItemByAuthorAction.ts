import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
class RemoveChatItemByAuthorAction extends YTNode {
  static type = 'RemoveChatItemByAuthorAction';

  external_channel_id: string;

  constructor(data: RawNode) {
    super();
    this.external_channel_id = data.externalChannelId;
  }
}

export default RemoveChatItemByAuthorAction;
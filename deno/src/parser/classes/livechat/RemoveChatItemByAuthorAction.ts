import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
class RemoveChatItemByAuthorAction extends YTNode {
  static type = 'RemoveChatItemByAuthorAction';

  external_channel_id: string;

  constructor(data: RawNode) {
    super();
    this.external_channel_id = data.externalChannelId;
  }
}

export default RemoveChatItemByAuthorAction;
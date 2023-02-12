import { YTNode } from '../../helpers.js';

class RemoveChatItemByAuthorAction extends YTNode {
  static type = 'RemoveChatItemByAuthorAction';

  external_channel_id: string;

  constructor(data: any) {
    super();
    this.external_channel_id = data.externalChannelId;
  }
}

export default RemoveChatItemByAuthorAction;
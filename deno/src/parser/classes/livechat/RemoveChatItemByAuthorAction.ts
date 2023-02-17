import { YTNode } from '../../helpers.ts';

class RemoveChatItemByAuthorAction extends YTNode {
  static type = 'RemoveChatItemByAuthorAction';

  external_channel_id: string;

  constructor(data: any) {
    super();
    this.external_channel_id = data.externalChannelId;
  }
}

export default RemoveChatItemByAuthorAction;
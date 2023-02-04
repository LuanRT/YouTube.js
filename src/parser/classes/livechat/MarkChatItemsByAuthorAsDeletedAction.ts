import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';

class MarkChatItemsByAuthorAsDeletedAction extends YTNode {
  static type = 'MarkChatItemsByAuthorAsDeletedAction';

  deleted_state_message: Text;
  channel_id: string;

  constructor(data: any) {
    super();
    this.deleted_state_message = new Text(data.deletedStateMessage);
    this.channel_id = data.externalChannelId;
  }
}

export default MarkChatItemsByAuthorAsDeletedAction;
import Text from '../misc/Text';

import { YTNode } from '../../helpers';

class MarkChatItemsByAuthorAsDeletedAction extends YTNode {
  static type = 'MarkChatItemsByAuthorAsDeletedAction';
  constructor(data) {
    super();
    this.deleted_state_message = new Text(data.deletedStateMessage);
    this.channel_id = data.externalChannelId;
  }
}
export default MarkChatItemsByAuthorAsDeletedAction;

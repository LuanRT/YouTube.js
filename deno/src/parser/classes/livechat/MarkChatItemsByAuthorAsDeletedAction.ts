import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
class MarkChatItemsByAuthorAsDeletedAction extends YTNode {
  static type = 'MarkChatItemsByAuthorAsDeletedAction';

  deleted_state_message: Text;
  channel_id: string;

  constructor(data: RawNode) {
    super();
    this.deleted_state_message = new Text(data.deletedStateMessage);
    this.channel_id = data.externalChannelId;
  }
}

export default MarkChatItemsByAuthorAsDeletedAction;
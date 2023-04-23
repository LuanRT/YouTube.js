import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class MarkChatItemsByAuthorAsDeletedAction extends YTNode {
  static type = 'MarkChatItemsByAuthorAsDeletedAction';

  deleted_state_message: Text;
  external_channel_id: string;

  constructor(data: RawNode) {
    super();
    this.deleted_state_message = new Text(data.deletedStateMessage);
    this.external_channel_id = data.externalChannelId;
  }
}
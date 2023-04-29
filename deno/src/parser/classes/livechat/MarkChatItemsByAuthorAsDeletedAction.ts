import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

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
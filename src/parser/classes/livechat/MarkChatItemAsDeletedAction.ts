import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class MarkChatItemAsDeletedAction extends YTNode {
  static type = 'MarkChatItemAsDeletedAction';

  deleted_state_message: Text;
  target_item_id: string;

  constructor(data: RawNode) {
    super();
    this.deleted_state_message = new Text(data.deletedStateMessage);
    this.target_item_id = data.targetItemId;
  }
}
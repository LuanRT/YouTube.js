import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import { Parser } from '../../../index.js';
import Button from '../../Button.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';

export default class PollHeader extends YTNode {
  static type = 'PollHeader';

  poll_question: Text;
  thumbnails: Thumbnail[];
  metadata: Text;
  live_chat_poll_type: string;
  context_menu_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.poll_question = new Text(data.pollQuestion);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.metadata = new Text(data.metadataText);
    this.live_chat_poll_type = data.liveChatPollType;
    this.context_menu_button = Parser.parseItem(data.contextMenuButton, Button);
  }
}
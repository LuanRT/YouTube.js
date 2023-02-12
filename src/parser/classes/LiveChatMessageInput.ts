import Text from './misc/Text.js';
import Parser from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import type Button from './Button.js';
import { YTNode } from '../helpers.js';

class LiveChatMessageInput extends YTNode {
  static type = 'LiveChatMessageInput';

  author_name: Text;
  author_photo: Thumbnail[];
  send_button: Button | null;
  target_id: string;

  constructor(data: any) {
    super();
    this.author_name = new Text(data.authorName);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.send_button = Parser.parseItem<Button>(data.sendButton);
    this.target_id = data.targetId;
  }
}

export default LiveChatMessageInput;
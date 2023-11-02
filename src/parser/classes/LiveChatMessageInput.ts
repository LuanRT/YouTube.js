import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class LiveChatMessageInput extends YTNode {
  static type = 'LiveChatMessageInput';

  author_name: Text;
  author_photo: Thumbnail[];
  send_button: Button | null;
  target_id: string;

  constructor(data: RawNode) {
    super();
    this.author_name = new Text(data.authorName);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.send_button = Parser.parseItem(data.sendButton, Button);
    this.target_id = data.targetId;
  }
}
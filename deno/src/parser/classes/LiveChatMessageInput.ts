import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Button from './Button.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

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
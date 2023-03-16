import Text from './misc/Text.ts';
import Parser from '../index.ts';
import Thumbnail from './misc/Thumbnail.ts';
import Button from './Button.ts';
import { YTNode } from '../helpers.ts';

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
    this.send_button = Parser.parseItem(data.sendButton, Button);
    this.target_id = data.targetId;
  }
}

export default LiveChatMessageInput;
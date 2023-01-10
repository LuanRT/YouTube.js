import Text from './misc/Text';
import Parser from '../index';
import Thumbnail from './misc/Thumbnail';
import type Button from './Button';
import { YTNode } from '../helpers';

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
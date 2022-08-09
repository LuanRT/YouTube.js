import Text from './misc/Text';
import Parser from '../index';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class LiveChatMessageInput extends YTNode {
  static type = 'LiveChatMessageInput';

  author_name: Text;
  author_photo: Thumbnail[];
  send_button;
  target_id: string;

  constructor(data: any) {
    super();
    this.author_name = new Text(data.authorName);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.send_button = Parser.parse(data.sendButton);
    this.target_id = data.targetId;
  }
}

export default LiveChatMessageInput;
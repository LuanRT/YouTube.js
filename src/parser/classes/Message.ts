import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class Message extends YTNode {
  static type = 'Message';

  text: string;

  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
  }
}

export default Message;
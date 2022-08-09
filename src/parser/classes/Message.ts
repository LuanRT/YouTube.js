import Text from './misc/Text';
import { YTNode } from '../helpers';

class Message extends YTNode {
  static type = 'Message';
  
  text: string;
  
  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
  }
}

export default Message;
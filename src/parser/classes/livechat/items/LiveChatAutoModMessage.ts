import Text from '../../misc/Text';
import Parser from '../../../index';
import { YTNode } from '../../../helpers';

class LiveChatAutoModMessage extends YTNode {
  static type = 'LiveChatAutoModMessage';

  auto_moderated_item;
  header_text: Text;

  timestamp: number;
  id: string;

  constructor(data: any) {
    super();

    this.auto_moderated_item = Parser.parse(data.autoModeratedItem);
    this.header_text = new Text(data.headerText);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.id = data.id;
  }
}

export default LiveChatAutoModMessage;
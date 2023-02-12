import { ObservedArray, YTNode } from '../../../helpers.js';
import Parser from '../../../index.js';
import Button from '../../Button.js';
import Text from '../../misc/Text.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';

class LiveChatAutoModMessage extends YTNode {
  static type = 'LiveChatAutoModMessage';

  auto_moderated_item;
  header_text: Text;

  menu_endpoint?: NavigationEndpoint;
  moderation_buttons: ObservedArray<Button>;
  timestamp: number;
  id: string;

  constructor(data: any) {
    super();
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.moderation_buttons = Parser.parseArray<Button>(data.moderationButtons, [ Button ]);
    this.auto_moderated_item = Parser.parseItem(data.autoModeratedItem);
    this.header_text = new Text(data.headerText);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.id = data.id;
  }
}

export default LiveChatAutoModMessage;
import LiveChatTextMessage from './LiveChatTextMessage';
import Parser from '../../../index';

import { YTNode } from '../../../helpers';
class LiveChatViewerEngagementMessage extends LiveChatTextMessage {
  static type = 'LiveChatViewerEngagementMessage';
  constructor(data) {
    super(data);
    delete this.author;
    delete this.menu_endpoint;
    this.icon_type = data.icon.iconType;
    this.action_button = Parser.parse(data.actionButton);
  }
}
export default LiveChatViewerEngagementMessage;

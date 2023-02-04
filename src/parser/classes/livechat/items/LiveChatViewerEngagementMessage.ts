import Parser from '../../../index.js';
import LiveChatTextMessage from './LiveChatTextMessage.js';

class LiveChatViewerEngagementMessage extends LiveChatTextMessage {
  static type = 'LiveChatViewerEngagementMessage';

  icon_type: string;
  action_button;

  constructor(data: any) {
    super(data);
    delete this.author;
    delete this.menu_endpoint;
    this.icon_type = data.icon.iconType;
    this.action_button = Parser.parseItem(data.actionButton);
  }
}

export default LiveChatViewerEngagementMessage;
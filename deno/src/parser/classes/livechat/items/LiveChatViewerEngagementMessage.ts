import Parser from '../../../index.ts';
import { LiveChatMessageBase } from './LiveChatTextMessage.ts';
import type { RawNode } from '../../../index.ts';


class LiveChatViewerEngagementMessage extends LiveChatMessageBase {
  static type = 'LiveChatViewerEngagementMessage';

  icon_type: string;
  action_button;

  constructor(data: RawNode) {
    super(data);
    this.icon_type = data.icon.iconType;
    this.action_button = Parser.parseItem(data.actionButton);
  }
}

export default LiveChatViewerEngagementMessage;
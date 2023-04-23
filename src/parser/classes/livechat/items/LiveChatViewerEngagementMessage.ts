import Parser from '../../../index.js';
import { LiveChatMessageBase } from './LiveChatTextMessage.js';
import type { RawNode } from '../../../index.js';
import type { YTNode } from '../../../helpers.js';

export default class LiveChatViewerEngagementMessage extends LiveChatMessageBase {
  static type = 'LiveChatViewerEngagementMessage';

  icon_type?: string;
  action_button: YTNode;

  constructor(data: RawNode) {
    super(data);
    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType')) {
      this.icon_type = data.icon.iconType;
    }
    this.action_button = Parser.parseItem(data.actionButton);
  }
}
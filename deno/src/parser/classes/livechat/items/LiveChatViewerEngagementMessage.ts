import Parser from '../../../index.ts';
import { LiveChatMessageBase } from './LiveChatTextMessage.ts';
import type { RawNode } from '../../../index.ts';
import type { YTNode } from '../../../helpers.ts';

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
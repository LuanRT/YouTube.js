import { Parser } from '../../../index.js';
import type { RawNode } from '../../../index.js';
import { YTNode } from '../../../helpers.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Text from '../../misc/Text.js';

export default class LiveChatViewerEngagementMessage extends YTNode {
  static type = 'LiveChatViewerEngagementMessage';

  id: string;
  timestamp?: number;
  timestamp_usec?: string;
  icon_type?: string;
  message: Text;
  action_button: YTNode | null;
  menu_endpoint?: NavigationEndpoint;
  context_menu_accessibility_label?: string;

  constructor(data: RawNode) {
    super();
    this.id = data.id;

    if (Reflect.has(data, 'timestampUsec')) {
      this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
      this.timestamp_usec = data.timestampUsec;
    }

    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType')) {
      this.icon_type = data.icon.iconType;
    }

    this.message = new Text(data.message);
    this.action_button = Parser.parseItem(data.actionButton);

    if (Reflect.has(data, 'contextMenuEndpoint')) {
      this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    }

    if (
      Reflect.has(data, 'contextMenuAccessibility') &&
      Reflect.has(data.contextMenuAccessibility, 'accessibilityData') &&
      Reflect.has(data.contextMenuAccessibility.accessibilityData, 'label')
    ) {
      this.context_menu_accessibility_label = data.contextMenuAccessibility.accessibilityData.label;
    }
  }
}
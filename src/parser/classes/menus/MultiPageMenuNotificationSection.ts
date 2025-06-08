import { type ObservedArray, YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';
import ContinuationItem from '../ContinuationItem.js';
import Message from '../Message.js';
import Notification from '../Notification.js';
import Text from '../misc/Text.js';

export default class MultiPageMenuNotificationSection extends YTNode {
  static type = 'MultiPageMenuNotificationSection';

  public notification_section_title?: Text;
  public items: ObservedArray<Notification | Message | ContinuationItem>;

  constructor(data: RawNode) {
    super();
    
    if ('notificationSectionTitle' in data) {
      this.notification_section_title = new Text(data.notificationSectionTitle);
    }
    
    this.items = Parser.parseArray(data.items, [ Notification, Message, ContinuationItem ]);
  }

  // XXX: Alias for consistency.
  get contents() {
    return this.items;
  }
}
import { type ObservedArray, YTNode } from '../../helpers.ts';
import { Parser, type RawNode } from '../../index.ts';
import ContinuationItem from '../ContinuationItem.ts';
import Message from '../Message.ts';
import Notification from '../Notification.ts';
import Text from '../misc/Text.ts';

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
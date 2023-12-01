import { Parser } from '../../../index.ts';
import Button from '../../Button.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';
import Text from '../../misc/Text.ts';

import { YTNode, type ObservedArray } from '../../../helpers.ts';
import type { RawNode } from '../../../index.ts';

export default class LiveChatAutoModMessage extends YTNode {
  static type = 'LiveChatAutoModMessage';

  menu_endpoint?: NavigationEndpoint;
  moderation_buttons: ObservedArray<Button>;
  auto_moderated_item: YTNode;
  header_text: Text;
  timestamp: number;
  id: string;

  constructor(data: RawNode) {
    super();
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.moderation_buttons = Parser.parseArray(data.moderationButtons, Button);
    this.auto_moderated_item = Parser.parseItem(data.autoModeratedItem);
    this.header_text = new Text(data.headerText);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.id = data.id;
  }
}
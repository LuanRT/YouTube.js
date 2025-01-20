import { type ObservedArray, YTNode } from '../../../helpers.ts';
import type { RawNode } from '../../../index.ts';
import { Parser } from '../../../index.ts';
import Button from '../../Button.ts';
import ButtonView from '../../ButtonView.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';
import Author from '../../misc/Author.ts';
import Text from '../../misc/Text.ts';

export default class LiveChatTextMessage extends YTNode {
  static type = 'LiveChatTextMessage';

  id: string;
  message: Text;
  inline_action_buttons: ObservedArray<Button>;
  timestamp: number;
  timestamp_usec: number;
  timestamp_text?: string;
  author: Author;
  menu_endpoint?: NavigationEndpoint;
  context_menu_accessibility_label?: string;
  before_content_buttons: ObservedArray<ButtonView>;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.message = new Text(data.message);
    this.inline_action_buttons = Parser.parseArray(data.inlineActionButtons, Button);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.timestamp_usec = data.timestampUsec;

    if (Reflect.has(data, 'timestampText')) {
      this.timestamp_text = new Text(data.timestampText).toString();
    }

    this.author = new Author(
      data.authorName,
      data.authorBadges,
      data.authorPhoto,
      data.authorExternalChannelId
    );

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

    this.before_content_buttons = Parser.parseArray(data.beforeContentButtons, ButtonView);
  }
}
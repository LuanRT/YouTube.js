import { type ObservedArray, YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import Parser from '../../../index.js';
import Button from '../../Button.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Author from '../../misc/Author.js';
import Text from '../../misc/Text.js';

export class LiveChatMessageBase extends YTNode {
  static type = 'LiveChatMessageBase';

  message: Text;
  inline_action_buttons: ObservedArray<Button>;
  timestamp: number;
  id: string;

  constructor(data: RawNode) {
    super();
    this.message = new Text(data.message);
    this.inline_action_buttons = Parser.parseArray(data.inlineActionButtons, Button);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.id = data.id;
  }
}

export default class LiveChatTextMessage extends LiveChatMessageBase {
  static type = 'LiveChatTextMessage';

  author: Author;
  menu_endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super(data);

    this.author = new Author(
      data.authorName,
      data.authorBadges,
      data.authorPhoto,
      data.authorExternalChannelId
    );

    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
  }
}
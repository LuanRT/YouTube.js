import { YTNode } from '../../../helpers.ts';
import type { RawNode } from '../../../index.ts';
import { Parser } from '../../../index.ts';
import Button from '../../Button.ts';
import Text from '../../misc/Text.ts';
import Thumbnail from '../../misc/Thumbnail.ts';

export default class LiveChatBannerRedirect extends YTNode {
  static type = 'LiveChatBannerRedirect';

  banner_message: Text;
  author_photo: Thumbnail[];
  inline_action_button: Button | null;
  context_menu_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.banner_message = new Text(data.bannerMessage);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.inline_action_button = Parser.parseItem(data.inlineActionButton, Button);
    this.context_menu_button = Parser.parseItem(data.contextMenuButton, Button);
  }
}
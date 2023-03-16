import { YTNode } from '../../../helpers.ts';
import Parser from '../../../index.ts';
import Button from '../../Button.ts';
import Text from '../../misc/Text.ts';
import type { RawNode } from '../../../index.ts';

class LiveChatBannerHeader extends YTNode {
  static type = 'LiveChatBannerHeader';

  text: string;
  icon_type: string;
  context_menu_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text).toString();
    this.icon_type = data.icon?.iconType;
    this.context_menu_button = Parser.parseItem(data.contextMenuButton, Button);
  }
}

export default LiveChatBannerHeader;
import { YTNode } from '../../../helpers.js';
import Parser from '../../../index.js';
import Button from '../../Button.js';
import Text from '../../misc/Text.js';
import type { RawNode } from '../../../index.js';

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
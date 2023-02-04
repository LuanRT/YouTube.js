import { YTNode } from '../../../helpers.js';
import Parser from '../../../index.js';
import type Button from '../../Button.js';
import Text from '../../misc/Text.js';

class LiveChatBannerHeader extends YTNode {
  static type = 'LiveChatBannerHeader';

  text: string;
  icon_type: string;
  context_menu_button: Button | null;

  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
    this.icon_type = data.icon?.iconType;
    this.context_menu_button = Parser.parseItem<Button>(data.contextMenuButton);
  }
}

export default LiveChatBannerHeader;
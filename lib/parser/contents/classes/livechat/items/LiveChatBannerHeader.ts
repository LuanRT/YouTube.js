'use strict';

import Parser from '../../..';
import Text from '../../Text';

class LiveChatBannerHeader {
  type = 'LiveChatBannerHeader';

  constructor(data) {
    this.text = new Text(data.text).toString();
    this.icon_type = data.icon.iconType;
    this.context_menu_button = Parser.parse(data.contextMenuButton);
  }
}

export default LiveChatBannerHeader;
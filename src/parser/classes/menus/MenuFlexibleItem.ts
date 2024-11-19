import { Parser } from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

import Button from '../Button.js';
import ButtonView from '../ButtonView.js';
import MenuServiceItem from './MenuServiceItem.js';
import DownloadButton from '../DownloadButton.js';
import MenuServiceItemDownload from './MenuServiceItemDownload.js';

export default class MenuFlexibleItem extends YTNode {
  static type = 'MenuFlexibleItem';

  public menu_item: MenuServiceItem | MenuServiceItemDownload | null;
  public top_level_button: DownloadButton | ButtonView | Button | null;

  constructor(data: RawNode) {
    super();
    this.menu_item = Parser.parseItem(data.menuItem, [ MenuServiceItem, MenuServiceItemDownload ]);
    this.top_level_button = Parser.parseItem(data.topLevelButton, [ DownloadButton, ButtonView, Button ]);
  }
}
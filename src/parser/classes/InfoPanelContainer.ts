import { YTNode } from '../helpers.js';
import Parser, { RawNode } from '../index.js';
import InfoPanelContent from './InfoPanelContent.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';

export default class InfoPanelContainer extends YTNode {
  static type = 'InfoPanelContainer';

  icon_type?: string;
  title: Text;
  menu: Menu | null;
  content: YTNode | null;
  background: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.menu = Parser.parseItem(data.menu, Menu);
    this.content = Parser.parseItem(data.content, InfoPanelContent);
    this.background = data.background;

    if (data.icon?.iconType) {
      this.icon_type = data.icon.iconType;
    }
  }
}
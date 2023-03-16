import { YTNode } from '../helpers.ts';
import Parser, { RawNode } from '../index.ts';
import InfoPanelContent from './InfoPanelContent.ts';
import Menu from './menus/Menu.ts';
import Text from './misc/Text.ts';

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
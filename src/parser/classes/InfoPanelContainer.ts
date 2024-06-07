import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import InfoPanelContent from './InfoPanelContent.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class InfoPanelContainer extends YTNode {
  static type = 'InfoPanelContainer';

  title: Text;
  menu: Menu | null;
  content: InfoPanelContent | null;
  header_endpoint?: NavigationEndpoint;
  background: string;
  title_style?: string;
  icon_type?: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.menu = Parser.parseItem(data.menu, Menu);
    this.content = Parser.parseItem(data.content, InfoPanelContent);

    if (data.headerEndpoint)
      this.header_endpoint = new NavigationEndpoint(data.headerEndpoint);

    this.background = data.background;
    this.title_style = data.titleStyle;

    if (Reflect.has(data, 'icon')) {
      this.icon_type = data.icon?.iconType;
    }
  }
}
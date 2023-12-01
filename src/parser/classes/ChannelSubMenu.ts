import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class ChannelSubMenu extends YTNode {
  static type = 'ChannelSubMenu';

  content_type_sub_menu_items: {
    endpoint: NavigationEndpoint;
    selected: boolean;
    title: string;
  }[];

  sort_setting;

  constructor(data: RawNode) {
    super();
    this.content_type_sub_menu_items = data.contentTypeSubMenuItems.map((item: RawNode) => ({
      endpoint: new NavigationEndpoint(item.navigationEndpoint || item.endpoint),
      selected: item.selected,
      title: item.title
    }));
    this.sort_setting = Parser.parseItem(data.sortSetting);
  }
}
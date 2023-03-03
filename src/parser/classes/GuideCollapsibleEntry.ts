import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import Parser from '../parser.js';

class GuideCollapsibleEntry extends YTNode {
  static type = 'GuideCollapsibleEntry';

  expander_item: {
    title: string,
    icon_type: string
  };
  collapser_item: {
    title: string,
    icon_type: string
  };
  expandable_items;

  constructor(data: any) {
    super();
    
    this.expander_item = {
      title: new Text(data.expanderItem.guideEntryRenderer.formattedTitle).toString(),
      icon_type: data.expanderItem.guideEntryRenderer.icon.iconType
    };

    this.collapser_item = {
      title: new Text(data.collapserItem.guideEntryRenderer.formattedTitle).toString(),
      icon_type: data.collapserItem.guideEntryRenderer.icon.iconType
    };

    this.expandable_items = Parser.parseArray(data.expandableItems);
  }
}

export default GuideCollapsibleEntry;
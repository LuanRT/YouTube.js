import Text from './misc/Text.js';
import { ObservedArray, YTNode } from '../helpers.js';
import ItemSectionTab from './ItemSectionTab.js';
import Parser from '../index.js';

class ItemSectionTabbedHeader extends YTNode {
  static type = 'ItemSectionTabbedHeader';

  title: Text;
  tabs: Array<ItemSectionTab>;
  end_items?: ObservedArray<YTNode>;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.tabs = Parser.parseArray(data.tabs, ItemSectionTab);
    if (data.endItems) {
      this.end_items = Parser.parseArray(data.endItems);
    }
  }
}

export default ItemSectionTabbedHeader;
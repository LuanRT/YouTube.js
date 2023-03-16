import Text from './misc/Text.ts';
import { ObservedArray, YTNode } from '../helpers.ts';
import ItemSectionTab from './ItemSectionTab.ts';
import Parser from '../index.ts';

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
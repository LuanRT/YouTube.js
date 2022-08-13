import Text from './misc/Text';
import { ObservedArray, YTNode } from '../helpers';
import ItemSectionTab from './ItemSectionTab';
import Parser from '..';

class ItemSectionTabbedHeader extends YTNode {
  static type = 'ItemSectionTabbedHeader';

  title: Text;
  tabs: Array<ItemSectionTab>;
  end_items?: ObservedArray<YTNode>;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.tabs = Parser.parseArray<ItemSectionTab>(data.tabs, ItemSectionTab);
    if (data.endItems) {
      this.end_items = Parser.parseArray(data.endItems);
    }
  }
}

export default ItemSectionTabbedHeader;
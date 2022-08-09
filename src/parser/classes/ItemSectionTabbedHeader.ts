import Text from './misc/Text';
import { YTNode } from '../helpers';
import ItemSectionTab from './ItemSectionTab';
import Parser from '..';

class ItemSectionTabbedHeader extends YTNode {
  static type = 'ItemSectionTabbedHeader';

  title: Text;
  tabs: Array<ItemSectionTab>;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.tabs = Parser.parseArray<ItemSectionTab>(data.tabs, ItemSectionTab);
  }
}

export default ItemSectionTabbedHeader;
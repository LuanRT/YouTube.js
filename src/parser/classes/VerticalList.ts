import Parser from '../index';
import Text from './misc/Text';
import { YTNode } from '../helpers';

class VerticalList extends YTNode {
  static type = 'VerticalList';

  items;
  collapsed_item_count: string; // Number?
  collapsed_state_button_text: Text;

  constructor(data: any) {
    super();
    this.items = Parser.parse(data.items);
    this.collapsed_item_count = data.collapsedItemCount;
    this.collapsed_state_button_text = new Text(data.collapsedStateButtonText);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default VerticalList;
import Parser from '../index.ts';
import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

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
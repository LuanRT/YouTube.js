import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
class Menu extends YTNode {
  static type = 'Menu';

  items;
  top_level_buttons;
  label;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
    this.top_level_buttons = Parser.parseArray(data.topLevelButtons);
    this.label = data.accessibility?.accessibilityData?.label || null;
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default Menu;
import Button from '../Button.js';
import type { RawNode } from '../../index.js';
class MenuNavigationItem extends Button {
  static type = 'MenuNavigationItem';

  constructor(data: RawNode) {
    super(data);
  }
}

export default MenuNavigationItem;
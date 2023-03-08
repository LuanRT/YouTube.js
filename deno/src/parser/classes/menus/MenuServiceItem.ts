import Button from '../Button.ts';
import type { RawNode } from '../../index.ts';
class MenuServiceItem extends Button {
  static type = 'MenuServiceItem';

  constructor(data: RawNode) {
    super(data);
  }
}

export default MenuServiceItem;
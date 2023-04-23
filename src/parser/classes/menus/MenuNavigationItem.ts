import Button from '../Button.js';
import type { RawNode } from '../../index.js';

export default class MenuNavigationItem extends Button {
  static type = 'MenuNavigationItem';

  constructor(data: RawNode) {
    super(data);
  }
}
import Button from '../Button.ts';
import type { RawNode } from '../../index.ts';

export default class MenuNavigationItem extends Button {
  static type = 'MenuNavigationItem';

  constructor(data: RawNode) {
    super(data);
  }
}
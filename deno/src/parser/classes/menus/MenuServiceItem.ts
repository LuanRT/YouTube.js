import Button from '../Button.ts';
import type { RawNode } from '../../index.ts';

export default class MenuServiceItem extends Button {
  static type = 'MenuServiceItem';

  constructor(data: RawNode) {
    super(data);
  }
}
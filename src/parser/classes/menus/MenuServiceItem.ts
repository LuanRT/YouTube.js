import Button from '../Button.js';
import type { RawNode } from '../../index.js';

export default class MenuServiceItem extends Button {
  static type = 'MenuServiceItem';

  constructor(data: RawNode) {
    super(data);
  }
}
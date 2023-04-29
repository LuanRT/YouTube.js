import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class SimpleCardTeaser extends YTNode {
  static type = 'SimpleCardTeaser';

  message: Text;
  prominent: boolean; // @TODO: or string?

  constructor(data: RawNode) {
    super();
    this.message = new Text(data.message);
    this.prominent = data.prominent;
  }
}
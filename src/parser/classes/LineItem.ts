import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class LineItem extends YTNode {
  static type = 'LineItem';

  text: Text;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
  }
}
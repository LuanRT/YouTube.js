import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class CardItemText extends YTNode {
  static type = 'CardItemText';

  text: Text;
  textColor: string;
  style: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
    this.textColor = data.textColor;
    this.style = data.style;
  }
}

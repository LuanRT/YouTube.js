import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class TextHeader extends YTNode {
  static type = 'TextHeader';

  title: Text;
  style: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.style = data.style;
  }
}
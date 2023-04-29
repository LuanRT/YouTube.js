import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

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
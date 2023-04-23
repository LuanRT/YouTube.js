import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class TitleAndButtonListHeader extends YTNode {
  static type = 'TitleAndButtonListHeader';

  title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}
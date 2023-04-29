import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class TitleAndButtonListHeader extends YTNode {
  static type = 'TitleAndButtonListHeader';

  title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}
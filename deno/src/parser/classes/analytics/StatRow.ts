import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class StatRow extends YTNode {
  static type = 'StatRow';

  title: Text;
  contents: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.contents = new Text(data.contents);
  }
}
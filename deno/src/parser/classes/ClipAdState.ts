import { YTNode } from '../helpers.ts';
import Text from './misc/Text.ts';

import type { RawNode } from '../types/index.ts';

export default class ClipAdState extends YTNode {
  static type = 'ClipAdState';

  title: Text;
  body: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.body = new Text(data.body);
  }
}
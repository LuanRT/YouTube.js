import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';

import type { RawNode } from '../types/index.js';

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
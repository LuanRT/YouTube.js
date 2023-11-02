import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

export default class BackstagePostThread extends YTNode {
  static type = 'BackstagePostThread';

  post: YTNode;

  constructor(data: RawNode) {
    super();
    this.post = Parser.parseItem(data.post);
  }
}
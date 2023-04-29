import Parser, { type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';

export default class BackstagePostThread extends YTNode {
  static type = 'BackstagePostThread';

  post: YTNode;

  constructor(data: RawNode) {
    super();
    this.post = Parser.parseItem(data.post);
  }
}
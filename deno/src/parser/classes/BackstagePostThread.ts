import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class BackstagePostThread extends YTNode {
  static type = 'BackstagePostThread';

  post;

  constructor(data: any) {
    super();
    this.post = Parser.parseItem(data.post);
  }
}

export default BackstagePostThread;
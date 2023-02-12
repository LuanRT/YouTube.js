import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class BackstagePostThread extends YTNode {
  static type = 'BackstagePostThread';

  post;

  constructor(data: any) {
    super();
    this.post = Parser.parseItem(data.post);
  }
}

export default BackstagePostThread;
import Parser from '../index';
import { YTNode } from '../helpers';

class BackstagePostThread extends YTNode {
  static type = 'BackstagePostThread';

  post;

  constructor(data: any) {
    super();
    this.post = Parser.parse(data.post);
  }
}

export default BackstagePostThread;
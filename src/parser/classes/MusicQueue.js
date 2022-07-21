import Parser from '../index';
import { YTNode } from '../helpers';

class MusicQueue extends YTNode {
  static type = 'MusicQueue';

  constructor(data) {
    super();
    this.content = Parser.parse(data.content);
  }
}

export default MusicQueue;
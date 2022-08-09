import Parser from '../index';
import { YTNode } from '../helpers';

class MusicQueue extends YTNode {
  static type = 'MusicQueue';
  
  content;
  
  constructor(data: any) {
    super();
    this.content = Parser.parse(data.content);
  }
}

export default MusicQueue;
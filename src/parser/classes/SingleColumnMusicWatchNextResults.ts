import Parser from '../index';
import { YTNode } from '../helpers';

class SingleColumnMusicWatchNextResults extends YTNode {
  static type = 'SingleColumnMusicWatchNextResults';
  
  contents;
  
  constructor(data: any) {
    super();
    this.contents = Parser.parse(data);
  }
}

export default SingleColumnMusicWatchNextResults;
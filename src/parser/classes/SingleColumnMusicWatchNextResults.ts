import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class SingleColumnMusicWatchNextResults extends YTNode {
  static type = 'SingleColumnMusicWatchNextResults';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data);
  }
}

export default SingleColumnMusicWatchNextResults;
import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class SingleColumnMusicWatchNextResults extends YTNode {
  static type = 'SingleColumnMusicWatchNextResults';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data);
  }
}

export default SingleColumnMusicWatchNextResults;
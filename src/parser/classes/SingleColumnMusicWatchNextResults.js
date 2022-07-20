import Parser from '../index';

import { YTNode } from '../helpers';

class SingleColumnMusicWatchNextResults extends YTNode {
  static type = 'SingleColumnMusicWatchNextResults';
  constructor(data) {
    super();
    return Parser.parse(data);
  }
}
export default SingleColumnMusicWatchNextResults;

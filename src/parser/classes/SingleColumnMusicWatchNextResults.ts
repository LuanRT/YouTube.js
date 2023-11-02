import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export default class SingleColumnMusicWatchNextResults extends YTNode {
  static type = 'SingleColumnMusicWatchNextResults';

  contents;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parse(data);
  }
}
import Parser from '../index.js';
import PlaylistPanel from './PlaylistPanel.js';
import { YTNode } from '../helpers.js';

class MusicQueue extends YTNode {
  static type = 'MusicQueue';

  content: PlaylistPanel | null;

  constructor(data: any) {
    super();
    this.content = Parser.parseItem<PlaylistPanel>(data.content, PlaylistPanel);
  }
}

export default MusicQueue;
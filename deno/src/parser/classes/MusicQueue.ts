import Parser from '../index.ts';
import PlaylistPanel from './PlaylistPanel.ts';
import { YTNode } from '../helpers.ts';

class MusicQueue extends YTNode {
  static type = 'MusicQueue';

  content: PlaylistPanel | null;

  constructor(data: any) {
    super();
    this.content = Parser.parseItem<PlaylistPanel>(data.content, PlaylistPanel);
  }
}

export default MusicQueue;
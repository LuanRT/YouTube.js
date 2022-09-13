import Parser from '../index';
import PlaylistPanel from './PlaylistPanel';
import { YTNode } from '../helpers';

class MusicQueue extends YTNode {
  static type = 'MusicQueue';

  content: PlaylistPanel | null;

  constructor(data: any) {
    super();
    this.content = Parser.parseItem<PlaylistPanel>(data.content, PlaylistPanel);
  }
}

export default MusicQueue;
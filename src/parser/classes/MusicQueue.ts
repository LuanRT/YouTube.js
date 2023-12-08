import { Parser, type RawNode } from '../index.js';
import PlaylistPanel from './PlaylistPanel.js';
import { YTNode } from '../helpers.js';

export default class MusicQueue extends YTNode {
  static type = 'MusicQueue';

  content: PlaylistPanel | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, PlaylistPanel);
  }
}
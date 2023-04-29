import Parser, { type RawNode } from '../index.ts';
import PlaylistPanel from './PlaylistPanel.ts';
import { YTNode } from '../helpers.ts';

export default class MusicQueue extends YTNode {
  static type = 'MusicQueue';

  content: PlaylistPanel | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, PlaylistPanel);
  }
}
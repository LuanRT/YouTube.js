import Parser, { type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

export default class MusicEditablePlaylistDetailHeader extends YTNode {
  static type = 'MusicEditablePlaylistDetailHeader';

  header: YTNode;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header);

    // TODO: Parse data.editHeader.musicPlaylistEditHeaderRenderer.
  }
}
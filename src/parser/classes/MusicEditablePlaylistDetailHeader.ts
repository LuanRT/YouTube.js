import Parser, { RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

class MusicEditablePlaylistDetailHeader extends YTNode {
  static type = 'MusicEditablePlaylistDetailHeader';

  header;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header);

    // TODO: Should we also parse data.editHeader.musicPlaylistEditHeaderRenderer?
    // It doesn't seem practical to do so...
  }
}

export default MusicEditablePlaylistDetailHeader;
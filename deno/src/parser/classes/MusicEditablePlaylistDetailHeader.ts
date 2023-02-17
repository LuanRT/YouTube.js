import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class MusicEditablePlaylistDetailHeader extends YTNode {
  static type = 'MusicEditablePlaylistDetailHeader';

  header;

  constructor(data: any) {
    super();
    this.header = Parser.parse(data.header);

    // TODO: Should we also parse data.editHeader.musicPlaylistEditHeaderRenderer?
    // It doesn't seem practical to do so...
  }
}

export default MusicEditablePlaylistDetailHeader;
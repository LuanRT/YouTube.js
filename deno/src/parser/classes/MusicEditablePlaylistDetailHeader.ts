import { Parser, type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';

export default class MusicEditablePlaylistDetailHeader extends YTNode {
  static type = 'MusicEditablePlaylistDetailHeader';

  header: YTNode;
  edit_header: YTNode;
  playlist_id: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header);
    this.edit_header = Parser.parseItem(data.editHeader);
    this.playlist_id = data.playlistId;
  }
}
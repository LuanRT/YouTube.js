import Parser from '../index';

import { YTNode } from '../helpers';

class PlaylistVideoList extends YTNode {
  static type = 'PlaylistVideoList';
  constructor(data) {
    super();
    this.id = data.playlistId;
    this.is_editable = data.isEditable;
    this.can_reorder = data.canReorder;
    this.videos = Parser.parse(data.contents);
  }
}
export default PlaylistVideoList;

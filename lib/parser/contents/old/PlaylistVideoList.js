const Parser = require('..');

class PlaylistVideoList {
  type = 'PlaylistVideoList';

  constructor(item) {
    this.is_editable = item.isEditable;
    this.can_reorder = item.canReorder;
    this.id = item.playlistId;
    this.contents = Parser.parse(item.contents);
  }
}

module.exports = PlaylistVideoList;
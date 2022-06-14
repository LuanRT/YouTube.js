'use strict';

const Parser = require('..');

class PlaylistVideoList {
  type = 'playlistVideoListRenderer';
  
  constructor(data) {
    this.id = data.playlistId;
    this.is_editable = data.isEditable;
    this.can_reorder = data.canReorder;
    this.videos = Parser.parse(data.contents);
  }
}

module.exports = PlaylistVideoList;
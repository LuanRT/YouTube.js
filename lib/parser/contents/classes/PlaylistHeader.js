'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const PlaylistAuthor = require('./PlaylistAuthor');
const Parser = require('..');

class PlaylistHeader {
  type = 'PlaylistHeader';
  
  constructor(data) {
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.stats = data.stats.map((stat) => new Text(stat));
    this.brief_stats = data.briefStats.map((stat) => new Text(stat));
    this.author = new PlaylistAuthor({ ...data.ownerText, navigationEndpoint: data.ownerEndpoint }, data.ownerBadges, null);
    this.description = new Text(data.descriptionText);
    this.num_videos = new Text(data.numVideosText);
    this.view_count = new Text(data.viewCountText);
    this.can_share = data.shareData.canShare;
    this.can_delete = data.editableDetails.canDelete;
    this.is_editable = data.isEditable;
    this.privacy = data.privacy;
    this.save_button = Parser.parse(data.saveButton);
    this.shuffle_play_button = Parser.parse(data.shufflePlayButton);
    this.menu = Parser.parse(data.moreActionsMenu);
  }
}

module.exports = PlaylistHeader;
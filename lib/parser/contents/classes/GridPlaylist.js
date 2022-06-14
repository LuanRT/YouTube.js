'use strict';

const Text = require('./Text');
const Parser = require('..');
const Thumbnail = require('./Thumbnail');
const PlaylistAuthor = require('./PlaylistAuthor');
const NavigationEndpoint = require('./NavigationEndpoint');

class GridPlaylist {
  type = 'GridPlaylist';
  
  constructor(data) {
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.author =  new PlaylistAuthor({ nav_text: data.shortBylineText });
    this.badges = Parser.parse(data.ownerBadges);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.view_playlist = new NavigatableText(data.viewPlaylistText);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.sidebar_thumbnails = [].concat(...data.sidebarThumbnails?.map((thumbnail) => Thumbnail.fromResponse(thumbnail)) || []) || null;
    this.video_count = new Text(data.thumbnailText);
    this.video_count_short_text = new Text(data.videoCountShortText);
  }
}

module.exports = GridPlaylist;
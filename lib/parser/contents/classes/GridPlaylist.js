'use strict';

const Text = require('./Text');
const Parser = require('..');
const Thumbnail = require('./Thumbnail');
const PlaylistAuthor = require('./PlaylistAuthor');
const NavigationEndpoint = require('./NavigationEndpoint');
const NavigatableText = require('./NavigatableText');

class GridPlaylist {
  type = 'GridPlaylist';
  
  constructor(data) {
    this.id = data.playlistId;
    this.title = new Text(data.title);
   
    data.shortBylineText &&
      (this.author =  new PlaylistAuthor(data.shortBylineText, data.ownerBadges));
      
    this.badges = Parser.parse(data.ownerBadges);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.view_playlist = new NavigatableText(data.viewPlaylistText);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_renderer = Parser.parse(data.thumbnailRenderer);
    this.sidebar_thumbnails = [].concat(...data.sidebarThumbnails?.map((thumbnail) => Thumbnail.fromResponse(thumbnail)) || []) || null;
    this.video_count = new Text(data.thumbnailText);
    this.video_count_short_text = new Text(data.videoCountShortText);
  }
}

module.exports = GridPlaylist;
'use strict';

const Text = require('./Text');
const Parser = require('..');
const Thumbnail = require('./Thumbnail');
const PlaylistAuthor = require('./PlaylistAuthor');
const NavigationEndpoint = require('./NavigationEndpoint');

class GridPlaylist {
  type = 'gridPlaylistRenderer';
  
  constructor(data) {
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.author =  new PlaylistAuthor({ nav_text: data.shortBylineText });
    this.badges = Parser.parse(data.ownerBadges);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.sidebar_thumbnails = [].concat(...data.sidebarThumbnails?.map((thumbnail) => new Thumbnail(thumbnail).thumbnails) || []) || null;
    this.video_count = new Text(data.thumbnailText);
    this.video_count_short_text = new Text(data.videoCountShortText);
  }
}

module.exports = GridPlaylist;
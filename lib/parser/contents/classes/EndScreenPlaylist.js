'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class EndScreenPlaylist {
  type = 'endScreenPlaylistRenderer';
  
  constructor(data) {
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.author =  new Text(data.longBylineText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.video_count = new Text(data.videoCountText);
  }
}

module.exports = EndScreenPlaylist;
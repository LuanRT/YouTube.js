'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const PlaylistAuthor = require('./PlaylistAuthor');
const NavigationEndpoint = require('./NavigationEndpoint');

class PlaylistVideo {
  type = 'playlistVideoRenderer';
  
  constructor(data) {
    this.id = data.videoId;
    this.index = new Text(data.index);
    this.title = new Text(data.title);
    this.author = new PlaylistAuthor({ nav_text: data.shortBylineText });
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.set_video_id = data?.setVideoId;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.is_playable = data.isPlayable;
    this.duration = {
      text: new Text(data.lengthText).text,
      seconds: parseInt(data.lengthSeconds)
    }
  }
}

module.exports = PlaylistVideo; 
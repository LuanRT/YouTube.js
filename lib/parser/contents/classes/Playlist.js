'use strict';

const Text = require('./Text');
const Parser = require('..');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');
const PlaylistAuthor = require('./PlaylistAuthor');

class Playlist {
  type = 'playlistRenderer';
  
  constructor(data) {
    this.id = data.playlistId;
    this.title = new Text(data.title);

    this.author = data.shortBylineText.simpleText &&
      new Text(data.shortBylineText) || 
      new PlaylistAuthor({ nav_text: data.shortBylineText, badges: data.ownerBadges });
   
    this.badges = Parser.parse(data.ownerBadges);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  
    this.thumbnail = {
      thumbnails: new Thumbnail(data.thumbnail).thumbnails,
      sampled_thumbnail_color: data.thumbnail?.sampledThumbnailColor
    };
    
    this.video_count = new Text(data.thumbnailText);
    this.video_count_short_text = new Text(data.videoCountShortText);
    
    this.first_videos = Parser.parse(data.videos);
  }
}

module.exports = Playlist;
'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class VideoInfoCardContent {
  type = 'videoInfoCardContentRenderer';
  
  constructor(data) {
    this.title = new Text(data.videoTitle);
    this.channel_name = new Text(data.channelName);
    this.view_count = new Text(data.viewCountText);
    this.video_thumbnails = new Thumbnail(data.videoThumbnail).thumbnails;
    this.duration = new Text(data.lengthString);
    this.endpoint = new NavigationEndpoint(data.action);
  }
}

module.exports = VideoInfoCardContent;
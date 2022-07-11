'use strict';

const Parser = require('..');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class Notification {
  type = 'Notification';
  
  constructor(data) {
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_thumbnails = Thumbnail.fromResponse(data.videoThumbnail);
    this.short_message = new Text(data.shortMessage);
    this.sent_time = new Text(data.sentTimeText);
    this.notification_id = data.notificationId;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.record_click_endpoint = new NavigationEndpoint(data.recordClickEndpoint);
    this.menu = Parser.parse(data.contextualMenu);
    this.read = data.read;
  }
}

module.exports = Notification;
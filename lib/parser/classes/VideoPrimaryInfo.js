'use strict';

const Parser = require('..');
const Text = require('./Text');

class VideoPrimaryInfo {
  type = 'VideoPrimaryInfo';

  constructor(data) {
    this.title = new Text(data.title);
    this.super_title_link = new Text(data.superTitleLink);
    this.view_count = new Text(data.viewCount.videoViewCountRenderer.viewCount);
    this.short_view_count = new Text(data.viewCount.videoViewCountRenderer.shortViewCount);
    this.published = new Text(data.dateText);
    this.menu = Parser.parse(data.videoActions);
  }
}

module.exports = VideoPrimaryInfo;
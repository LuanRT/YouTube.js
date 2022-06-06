'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class ProfileColumnUserInfo {
  type = 'profileColumnUserInfoRenderer';
  
  constructor(data) {
    this.title = new Text(data.title);
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
  }
}

module.exports = ProfileColumnUserInfo;
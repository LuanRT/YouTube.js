'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class ProfileColumnUserInfo {
  type = 'ProfileColumnUserInfo';

  constructor(data) {
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
  }
}

module.exports = ProfileColumnUserInfo;
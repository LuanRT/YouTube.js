'use strict';

const NavigationEndpoint = require('./NavigationEndpoint');
const Utils = require('../../../utils/Utils');
const Text = require('./Text');

class ChildVideo {
  type = 'childVideoRenderer';

  constructor(data) {
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.duration = {
      text: data.lengthText.simpleText,
      seconds: Utils.timeToSeconds(data.lengthText.simpleText)
    }
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

module.exports = ChildVideo;
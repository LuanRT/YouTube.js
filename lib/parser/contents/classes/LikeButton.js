'use strict';

const NavigationEndpoint = require('./NavigationEndpoint');

class LikeButton {
  type = 'LikeButton';

  constructor(data) {
    this.target = {
      video_id: data.target.videoId
    };

    this.like_status = data.likeStatus;
    this.likes_allowed = data.likesAllowed;

    if (data.serviceEndpoints) {
      this.endpoints = data.serviceEndpoints?.map((endpoint) => new NavigationEndpoint(endpoint))
    }
  }
}

module.exports = LikeButton;
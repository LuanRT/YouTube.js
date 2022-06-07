'use strict';

const Parser = require('..');

class PlayerOverlay {
  type = 'playerOverlayRenderer';
  
  constructor(data) {
    this.end_screen = Parser.parse(data.endScreen);
    this.autoplay = Parser.parse(data.autoplay);
    this.share_button = Parser.parse(data.shareButton);
    this.add_to_menu = Parser.parse(data.addToMenu);
    this.fullscreen_engagement = Parser.parse(data.fullscreenEngagement);
  }
}

module.exports = PlayerOverlay;
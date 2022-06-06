'use strict';

const Parser = require('..');

class PlayerOverlay {
  type = 'playerOverlayRenderer';
  
  constructor(data) {
    this.end_screen = Parser.parse(data.endScreen);
    this.share_button = Parser.parse(data.shareButton);
    this.add_to_menu = Parser.parse(data.addToMenu);
  }
}

module.exports = PlayerOverlay;
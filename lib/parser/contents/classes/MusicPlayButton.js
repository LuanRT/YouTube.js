'use strict';

const NavigationEndpoint = require('./NavigationEndpoint');

class MusicPlayButton {
  type = 'musicPlayButtonRenderer';
  
  constructor(data) {
    this.endpoint = new NavigationEndpoint(data.playNavigationEndpoint);
    this.play_icon_type = data.playIcon.iconType;
    this.pause_icon_type = data.pauseIcon.iconType;
    this.play_label = data.accessibilityPlayData.accessibilityData.label;
    this.pause_label = data.accessibilityPauseData.accessibilityData.label;
    this.icon_color = data.iconColor;
  }
}

module.exports = MusicPlayButton;
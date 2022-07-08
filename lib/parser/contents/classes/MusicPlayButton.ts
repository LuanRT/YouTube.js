'use strict';

import NavigationEndpoint from './NavigationEndpoint';

class MusicPlayButton {
  type = 'MusicPlayButton';

  constructor(data) {
    this.endpoint = new NavigationEndpoint(data.playNavigationEndpoint);
    this.play_icon_type = data.playIcon.iconType;
    this.pause_icon_type = data.pauseIcon.iconType;

    if (data.accessibilityPlayData) {
      this.play_label = data.accessibilityPlayData.accessibilityData.label;
    }

    if (data.accessibilityPlayData) {
      this.pause_label = data.accessibilityPauseData?.accessibilityData.label;
    }

    this.icon_color = data.iconColor;
  }
}

export default MusicPlayButton;
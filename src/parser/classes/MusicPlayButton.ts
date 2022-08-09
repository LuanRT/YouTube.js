import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class MusicPlayButton extends YTNode {
  static type = 'MusicPlayButton';
  
  endpoint: NavigationEndpoint;
  play_icon_type: string;
  pause_icon_type: string;
  play_label;
  pause_label;
  icon_color: string;
  
  constructor(data: any) {
    super();
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
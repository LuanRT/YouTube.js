import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class MusicPlayButton extends YTNode {
  static type = 'MusicPlayButton';

  endpoint: NavigationEndpoint;
  play_icon_type: string;
  pause_icon_type: string;
  play_label?: string;
  pause_label?: string;
  icon_color: string;

  constructor(data: RawNode) {
    super();
    this.endpoint = new NavigationEndpoint(data.playNavigationEndpoint);
    this.play_icon_type = data.playIcon.iconType;
    this.pause_icon_type = data.pauseIcon.iconType;

    if (Reflect.has(data, 'accessibilityPlayData')) {
      this.play_label = data.accessibilityPlayData.accessibilityData?.label;
    }

    if (Reflect.has(data, 'accessibilityPauseData')) {
      this.pause_label = data.accessibilityPauseData.accessibilityData?.label;
    }

    this.icon_color = data.iconColor;
  }
}
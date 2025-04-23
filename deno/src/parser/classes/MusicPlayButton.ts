import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import AccessibilityData, { type AccessibilitySupportedDatas } from './misc/AccessibilityData.ts';

export default class MusicPlayButton extends YTNode {
  static type = 'MusicPlayButton';

  public endpoint: NavigationEndpoint;
  public play_icon_type: string;
  public pause_icon_type: string;
  public icon_color: string;
  public accessibility_play_data?: AccessibilitySupportedDatas;
  public accessibility_pause_data?: AccessibilitySupportedDatas;

  constructor(data: RawNode) {
    super();
    this.endpoint = new NavigationEndpoint(data.playNavigationEndpoint);
    this.play_icon_type = data.playIcon.iconType;
    this.pause_icon_type = data.pauseIcon.iconType;

    if ('accessibilityPlayData' in data
      && 'accessibilityData' in data.accessibilityPlayData) {
      this.accessibility_play_data = {
        accessibility_data: new AccessibilityData(data.accessibilityPlayData.accessibilityData)
      };
    }

    if ('accessibilityPauseData' in data
      && 'accessibilityData' in data.accessibilityPauseData) {
      this.accessibility_pause_data = {
        accessibility_data: new AccessibilityData(data.accessibilityPauseData.accessibilityData)
      };
    }

    this.icon_color = data.iconColor;
  }
  
  get play_label(): string | undefined {
    return this.accessibility_play_data?.accessibility_data?.label;
  }
  
  get pause_label(): string | undefined {
    return this.accessibility_pause_data?.accessibility_data?.label;
  }
}
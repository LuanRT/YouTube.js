import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ThumbnailBadgeView extends YTNode {
  static type = 'ThumbnailBadgeView';

  icon_name?: string;
  text: string;
  badge_style: string;
  background_color?: {
    light_theme: number;
    dark_theme: number;
  };

  constructor(data: RawNode) {
    super();

    this.text = data.text;
    this.badge_style = data.badgeStyle;

    if (data.backgroundColor) {
      this.background_color = {
        light_theme: data.backgroundColor.lightTheme,
        dark_theme: data.backgroundColor.darkTheme
      };
    }

    if (data.iconName) {
      this.icon_name = data.icon.sources[0].clientResource.imageName;
    }
  }
}
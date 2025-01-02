import { type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

export default class ThumbnailOverlayIcon extends YTNode {
  static type = 'ThumbnailOverlayIcon';

  icon: {
    icon_type: string
  };
  icon_position: string;
  icon_color: string;

  constructor(data: RawNode) {
    super();
    this.icon = {
      icon_type: data.icon.iconType
    };
    this.icon_position = data.iconPosition;
    this.icon_color = data.iconColor;
  }
}
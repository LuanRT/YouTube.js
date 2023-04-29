import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import Thumbnail from '../misc/Thumbnail.ts';

export default class CreatorHeart extends YTNode {
  static type = 'CreatorHeart';

  creator_thumbnail: Thumbnail[];
  heart_icon_type?: string;
  heart_color: {
    basic_color_palette_data: {
      foreground_title_color: string;
    }
  };
  hearted_tooltip: string;
  is_hearted: boolean;
  is_enabled: boolean;
  kennedy_heart_color_string: string;

  constructor(data: RawNode) {
    super();
    this.creator_thumbnail = Thumbnail.fromResponse(data.creatorThumbnail);

    if (Reflect.has(data, 'heartIcon') && Reflect.has(data.heartIcon, 'iconType')) {
      this.heart_icon_type = data.heartIcon.iconType;
    }

    this.heart_color = {
      basic_color_palette_data: {
        foreground_title_color: data.heartColor?.basicColorPaletteData?.foregroundTitleColor
      }
    };

    this.hearted_tooltip = data.heartedTooltip;
    this.is_hearted = data.isHearted;
    this.is_enabled = data.isEnabled;
    this.kennedy_heart_color_string = data.kennedyHeartColorString;
  }
}
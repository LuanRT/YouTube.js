import { type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export interface UITweaks {
  use_zero_padding?: boolean;
  thumbnail_width?: number;
  thumbnail_height?: number;
}

export default class MediaLockup extends YTNode {
  static type = 'MediaLockup';

  public title: Text;
  public subtitle: Text;
  public thumbnail_details: Thumbnail[];
  public endpoint: NavigationEndpoint;
  public enable_subtitle_launch_icon: boolean;
  public ui_tweaks?: UITweaks;

  public max_lines_title?: number;
  public max_lines_subtitle?: number;
  public disable_endpoint: boolean;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.thumbnail_details = Thumbnail.fromResponse(data.thumbnailDetails);
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.enable_subtitle_launch_icon = !!data.enableSubtitleLaunchIcon;

    if ('uiTweaks' in data)
      this.ui_tweaks = {
        use_zero_padding: data.uiTweaks.useZeroPadding,
        thumbnail_width: data.uiTweaks.thumbnailWidth,
        thumbnail_height: data.uiTweaks.thumbnailHeight
      };

    this.max_lines_title = data.maxLinesTitle;
    this.max_lines_subtitle = data.maxLinesSubtitle;
    this.disable_endpoint = !!data.disableEndpoint;
  }
}
import { YTNode, type ObservedArray } from '../helpers.js';
import { type RawNode, Parser } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import ThumbnailOverlayTimeStatus from './ThumbnailOverlayTimeStatus.js';
import Text from './misc/Text.js';

export default class PivotVideo extends YTNode {
  static type = 'PivotVideo';

  video_id: string;
  thumbnail: Thumbnail[];
  title: Text;
  short_byline_text: Text;
  view_count_text: Text;
  length_text: Text;
  endpoint: NavigationEndpoint;
  overlay_icon: {
    icon_type: string
  };
  overlay_label: Text;
  thumbnail_overlays: ObservedArray<ThumbnailOverlayTimeStatus>;

  constructor(data: RawNode) {
    super();
    this.video_id = data.videoId;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.title = new Text(data.title);
    this.short_byline_text = new Text(data.shortBylineText);
    this.view_count_text = new Text(data.viewCountText);
    this.length_text = new Text(data.lengthText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.overlay_icon = {
      icon_type: data.overlayIcon.iconType
    };
    this.overlay_label = new Text(data.overlayLabel);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays, ThumbnailOverlayTimeStatus);
  }
}
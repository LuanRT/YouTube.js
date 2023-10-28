import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class StructuredDescriptionPlaylistLockup extends YTNode {
  static type = 'StructuredDescriptionPlaylistLockup';

  thumbnail: Thumbnail[];
  title: Text;
  short_byline_text: Text;
  video_count_short_text: Text;
  endpoint: NavigationEndpoint;
  thumbnail_width: number;
  aspect_ratio: number;
  max_lines_title: number;
  max_lines_short_byline_text: number;
  overlay_position: string;

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.title = new Text(data.title);
    this.short_byline_text = new Text(data.shortBylineText);
    this.video_count_short_text = new Text(data.videoCountShortText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.thumbnail_width = data.thumbnailWidth;
    this.aspect_ratio = data.aspectRatio;
    this.max_lines_title = data.maxLinesTitle;
    this.max_lines_short_byline_text = data.maxLinesShortBylineText;
    this.overlay_position = data.overlayPosition;
  }
}

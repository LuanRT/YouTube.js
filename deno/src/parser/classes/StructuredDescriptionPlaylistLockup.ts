import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

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

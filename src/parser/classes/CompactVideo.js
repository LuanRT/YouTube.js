import Parser from '../index';
import Text from './misc/Text';
import Author from './misc/Author';
import { timeToSeconds } from '../../utils/Utils';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class CompactVideo extends YTNode {
  static type = 'CompactVideo';
  constructor(data) {
    super();
    this.id = data.videoId;
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail) || null;
    this.rich_thumbnail = data.richThumbnail && Parser.parse(data.richThumbnail);
    this.title = new Text(data.title);
    this.author = new Author(data.longBylineText, data.ownerBadges, data.channelThumbnail);
    this.view_count = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    this.published = new Text(data.publishedTimeText);
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: timeToSeconds(new Text(data.lengthText).toString())
    };
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.menu = Parser.parse(data.menu);
  }
  get best_thumbnail() {
    return this.thumbnails[0];
  }
}
export default CompactVideo;

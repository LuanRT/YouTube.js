import Parser from '../index';
import Text from './misc/Text';
import Author from './misc/Author';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class EndScreenVideo extends YTNode {
  static type = 'EndScreenVideo';
  constructor(data) {
    super();
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.author = new Author(data.shortBylineText, data.ownerBadges);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.short_view_count_text = new Text(data.shortViewCountText);
    this.badges = Parser.parse(data.badges);
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: data.lengthInSeconds
    };
  }
}
export default EndScreenVideo;

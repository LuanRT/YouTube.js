import { YTNode } from '../helpers.ts';
import Parser, { RawNode } from '../index.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

class EndScreenVideo extends YTNode {
  static type = 'EndScreenVideo';

  id: string;
  title: Text;
  thumbnails: Thumbnail[];
  thumbnail_overlays;
  author: Author;
  endpoint: NavigationEndpoint;
  short_view_count: Text;
  badges;

  duration: {
    text: string;
    seconds: number;
  };

  constructor(data: RawNode) {
    super();
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    this.author = new Author(data.shortBylineText, data.ownerBadges);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.short_view_count = new Text(data.shortViewCountText);
    this.badges = Parser.parse(data.badges);
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: data.lengthInSeconds
    };
  }
}

export default EndScreenVideo;
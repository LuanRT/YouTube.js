import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class CompactStation extends YTNode {
  static type = 'CompactStation';

  title: Text;
  description: Text;
  video_count: Text;
  endpoint: NavigationEndpoint;
  thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.video_count = new Text(data.videoCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}
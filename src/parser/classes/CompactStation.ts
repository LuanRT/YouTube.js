import { YTNode } from '../helpers.js';

import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';

class CompactStation extends YTNode {
  static type = 'CompactStation';

  title: Text;
  description: Text;
  video_count: Text;
  endpoint: NavigationEndpoint;
  thumbnail: Thumbnail[];

  constructor(data: any) {
    super();

    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.video_count = new Text(data.videoCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}

export default CompactStation;
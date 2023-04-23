import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class ReelItem extends YTNode {
  static type = 'ReelItem';

  id: string;
  title: Text;
  thumbnails: Thumbnail[];
  views: Text;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.id = data.videoId;
    this.title = new Text(data.headline);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.views = new Text(data.viewCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}
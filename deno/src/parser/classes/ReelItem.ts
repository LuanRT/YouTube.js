import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

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
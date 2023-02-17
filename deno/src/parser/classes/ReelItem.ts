import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';

class ReelItem extends YTNode {
  static type = 'ReelItem';

  id: string;
  title: Text;
  thumbnails: Thumbnail[];
  views: Text;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.id = data.videoId;
    this.title = new Text(data.headline);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.views = new Text(data.viewCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default ReelItem;
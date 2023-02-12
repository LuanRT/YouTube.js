import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class BackstageImage extends YTNode {
  static type = 'BackstageImage';

  image: Thumbnail[];
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.image = Thumbnail.fromResponse(data.image);
    this.endpoint = new NavigationEndpoint(data.command);
  }
}

export default BackstageImage;
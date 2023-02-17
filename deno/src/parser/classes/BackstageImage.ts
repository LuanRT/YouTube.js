import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

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
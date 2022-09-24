import { YTNode } from '../helpers';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

class RichMetadata extends YTNode {
  static type = 'RichMetadata';

  title;
  subtitle;
  thumbnails: Thumbnail[];
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.endpoint);
  }
}

export default RichMetadata;
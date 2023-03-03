import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class RichMetadata extends YTNode {
  static type = 'RichMetadata';

  thumbnail: Thumbnail[];
  title: Text;
  subtitle?: Text;
  call_to_action: Text;
  icon_type?: string;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();

    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.call_to_action = new Text(data.callToAction);

    if (data.callToActionIcon?.iconType) {
      this.icon_type = data.callToActionIcon?.iconType;
    }

    this.endpoint = new NavigationEndpoint(data.endpoint);
  }
}

export default RichMetadata;
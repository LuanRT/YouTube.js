import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class RichMetadata extends YTNode {
  static type = 'RichMetadata';

  thumbnail: Thumbnail[];
  title: Text;
  subtitle: Text;
  call_to_action: Text;
  icon_type?: string;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.call_to_action = new Text(data.callToAction);

    if (Reflect.has(data, 'callToActionIcon')) {
      this.icon_type = data.callToActionIcon.iconType;
    }

    this.endpoint = new NavigationEndpoint(data.endpoint);
  }
}
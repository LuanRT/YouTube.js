import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class CollaboratorInfoCardContent extends YTNode {
  static type = 'CollaboratorInfoCardContent';

  channel_avatar: Thumbnail[];
  custom_text: Text;
  channel_name: Text;
  subscriber_count: Text;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.channel_avatar = Thumbnail.fromResponse(data.channelAvatar);
    this.custom_text = new Text(data.customText);
    this.channel_name = new Text(data.channelName);
    this.subscriber_count = new Text(data.subscriberCountText);
    this.endpoint = new NavigationEndpoint(data.endpoint);
  }
}
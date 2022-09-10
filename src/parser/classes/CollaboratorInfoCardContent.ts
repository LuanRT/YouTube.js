import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class CollaboratorInfoCardContent extends YTNode {
  static type = 'CollaboratorInfoCardContent';

  channel_avatar: Thumbnail[];
  custom_text: Text;
  channel_name: Text;
  subscriber_count: Text;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.channel_avatar = Thumbnail.fromResponse(data.channelAvatar);
    this.custom_text = new Text(data.customText);
    this.channel_name = new Text(data.channelName);
    this.subscriber_count = new Text(data.subscriberCountText);
    this.endpoint = new NavigationEndpoint(data.endpoint);
  }
}

export default CollaboratorInfoCardContent;
import Text from './misc/Text';
import Author from './misc/Author';

import { YTNode } from '../helpers';

class VideoOwner extends YTNode {
  static type = 'VideoOwner';
  constructor(data) {
    super();
    this.subscription_button = data.subscriptionButton || null;
    this.subscriber_count = new Text(data.subscriberCountText);
    this.author = new Author({
      ...data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.thumbnail);
  }
}
export default VideoOwner;

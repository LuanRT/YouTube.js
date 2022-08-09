import Text from './misc/Text';
import Author from './misc/Author';
import { YTNode } from '../helpers';

class VideoOwner extends YTNode {
  static type = 'VideoOwner';

  subscription_button;
  subscriber_count: Text;
  author: Author;

  constructor(data: any) {
    super();
    // TODO: check this
    this.subscription_button = data.subscriptionButton || null;
    this.subscriber_count = new Text(data.subscriberCountText);

    this.author = new Author({
      ...data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.thumbnail);
  }
}

export default VideoOwner;
'use strict';

import Text from './Text';
import Author from './Author';

class VideoOwner {
  type = 'VideoOwner';

  constructor(data) {
    this.subscription_button = data.subscriptionButton || null;
    this.subscriber_count = new Text(data.subscriberCountText);
    this.author = new Author({
      ...data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.thumbnail);
  }
}

export default VideoOwner;
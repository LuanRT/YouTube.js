import Text from './misc/Text.js';
import Author from './misc/Author.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class VideoOwner extends YTNode {
  static type = 'VideoOwner';

  subscription_button;
  subscriber_count: Text;
  author: Author;

  constructor(data: RawNode) {
    super();
    // TODO: check this
    this.subscription_button = data.subscriptionButton;
    this.subscriber_count = new Text(data.subscriberCountText);

    this.author = new Author({
      ...data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.thumbnail);
  }
}
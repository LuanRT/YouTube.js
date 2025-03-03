import Text from './misc/Text.js';
import Author from './misc/Author.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import SubscriptionButton from './misc/SubscriptionButton.js';

export default class VideoOwner extends YTNode {
  static type = 'VideoOwner';

  public subscription_button?: SubscriptionButton;
  public subscriber_count: Text;
  public author: Author;

  constructor(data: RawNode) {
    super();
    if ('subscriptionButton' in data)
      this.subscription_button = new SubscriptionButton(data.subscriptionButton);
    this.subscriber_count = new Text(data.subscriberCountText);
    this.author = new Author({
      ...data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.thumbnail);
  }
}
import Text from './misc/Text.ts';
import Author from './misc/Author.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import SubscriptionButton from './misc/SubscriptionButton.ts';

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
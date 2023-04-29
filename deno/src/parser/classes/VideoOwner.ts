import Text from './misc/Text.ts';
import Author from './misc/Author.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

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
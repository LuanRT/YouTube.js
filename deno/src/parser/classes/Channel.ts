import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Button from './Button.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import SubscribeButton from './SubscribeButton.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';

export default class Channel extends YTNode {
  static type = 'Channel';

  id: string;
  author: Author;
  subscriber_count: Text;
  video_count: Text;
  long_byline: Text;
  short_byline: Text;
  endpoint: NavigationEndpoint;
  subscribe_button: SubscribeButton | Button | null;
  description_snippet: Text;

  constructor(data: RawNode) {
    super();
    this.id = data.channelId;

    this.author = new Author({
      ...data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.ownerBadges, data.thumbnail);

    // XXX: `subscriberCountText` is now the channel's handle and `videoCountText` is the subscriber count.
    this.subscriber_count = new Text(data.subscriberCountText);
    this.video_count = new Text(data.videoCountText);
    this.long_byline = new Text(data.longBylineText);
    this.short_byline = new Text(data.shortBylineText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.subscribe_button = Parser.parseItem(data.subscribeButton, [ SubscribeButton, Button ]);
    this.description_snippet = new Text(data.descriptionSnippet);
  }
}
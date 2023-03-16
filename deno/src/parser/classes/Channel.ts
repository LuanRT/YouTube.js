import Parser from '../index.ts';

import Text from './misc/Text.ts';
import Author from './misc/Author.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

import SubscribeButton from './SubscribeButton.ts';

import { YTNode } from '../helpers.ts';

class Channel extends YTNode {
  static type = 'Channel';

  id: string;
  author: Author;
  subscribers: Text;
  videos: Text;
  long_byline: Text;
  short_byline: Text;
  endpoint: NavigationEndpoint;
  subscribe_button: SubscribeButton | null;
  description_snippet: Text;

  constructor(data: any) {
    super();
    this.id = data.channelId;

    this.author = new Author({
      ...data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.ownerBadges, data.thumbnail);

    // TODO: subscriberCountText is now the channel's handle and videoCountText is the subscriber count. Why haven't they renamed the properties?
    this.subscribers = new Text(data.subscriberCountText);
    this.videos = new Text(data.videoCountText);
    this.long_byline = new Text(data.longBylineText);
    this.short_byline = new Text(data.shortBylineText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.subscribe_button = Parser.parseItem(data.subscribeButton, SubscribeButton);
    this.description_snippet = new Text(data.descriptionSnippet);
  }
}

export default Channel;
import Author from './misc/Author';
import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';

import { YTNode } from '../helpers';

class GridChannel extends YTNode {
  static type = 'GridChannel';
  constructor(data) {
    super();
    this.id = data.channelId;
    this.author = new Author({
      ...data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.ownerBadges, data.thumbnail);
    this.subscribers = new Text(data.subscriberCountText);
    this.video_count = new Text(data.videoCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.subscribe_button = Parser.parse(data.subscribeButton);
  }
}
export default GridChannel;

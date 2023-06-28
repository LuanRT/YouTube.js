import { type ObservedArray, YTNode } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import { Text } from '../misc.js';
import type { Thumbnail } from '../misc.js';
import Factoid from './Factoid.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class VideoDescriptionHeader extends YTNode {
  static type = 'VideoDescriptionHeader';

  channel: Text;
  channel_navigation_endpoint?: NavigationEndpoint;
  channel_thumbnails: String[];
  factoids: ObservedArray<Factoid>;
  publish_date: Text;
  title: Text;
  views: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.channel = new Text(data.channel);
    this.channel_navigation_endpoint = Parser.parseItem(data.channelNavigationEndpoint, NavigationEndpoint) || undefined;
    this.channel_thumbnails = data.channelThumbnail.thumbnails.map((thumbnail: Thumbnail) => thumbnail.url);
    this.publish_date = new Text(data.publishDate);
    this.views = new Text(data.views);
    this.factoids = Parser.parseArray(data.factoid, Factoid);
  }
}

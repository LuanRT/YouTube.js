import { type ObservedArray, YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import { Text } from '../misc.ts';
import type { Thumbnail } from '../misc.ts';
import Factoid from './Factoid.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

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

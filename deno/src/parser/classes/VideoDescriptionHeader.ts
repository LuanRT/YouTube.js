import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import { Text, Thumbnail } from '../misc.ts';
import Factoid from './Factoid.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import UploadTimeFactoid from './UploadTimeFactoid.ts';
import ViewCountFactoid from './ViewCountFactoid.ts';

export default class VideoDescriptionHeader extends YTNode {
  static type = 'VideoDescriptionHeader';

  channel: Text;
  channel_navigation_endpoint?: NavigationEndpoint;
  channel_thumbnail: Thumbnail[];
  factoids: ObservedArray<Factoid | ViewCountFactoid | UploadTimeFactoid>;
  publish_date: Text;
  title: Text;
  views: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.channel = new Text(data.channel);
    this.channel_navigation_endpoint = new NavigationEndpoint(data.channelNavigationEndpoint);
    this.channel_thumbnail = Thumbnail.fromResponse(data.channelThumbnail);
    this.publish_date = new Text(data.publishDate);
    this.views = new Text(data.views);
    this.factoids = Parser.parseArray(data.factoid, [ Factoid, ViewCountFactoid, UploadTimeFactoid ]);
  }
}

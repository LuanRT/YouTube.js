import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class PlaylistSidebarPrimaryInfo extends YTNode {
  static type = 'PlaylistSidebarPrimaryInfo';

  public stats: Text[];
  public thumbnail_renderer: YTNode;
  public title: Text;
  public menu: YTNode;
  public endpoint: NavigationEndpoint;
  public description: Text;

  constructor(data: RawNode) {
    super();
    this.stats = data.stats.map((stat: RawNode) => new Text(stat));
    this.thumbnail_renderer = Parser.parseItem(data.thumbnailRenderer);
    this.title = new Text(data.title);
    this.menu = Parser.parseItem(data.menu);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.description = new Text(data.description);
  }
}
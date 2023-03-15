import Parser, { RawNode } from '../index.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';

import { YTNode } from '../helpers.js';

class PlaylistSidebarPrimaryInfo extends YTNode {
  static type = 'PlaylistSidebarPrimaryInfo';

  stats: Text[];
  thumbnail_renderer;
  title: Text;
  menu;
  endpoint: NavigationEndpoint;
  description: Text;

  constructor(data: RawNode) {
    super();
    this.stats = data.stats.map((stat: any) => new Text(stat));
    this.thumbnail_renderer = Parser.parseItem(data.thumbnailRenderer);
    this.title = new Text(data.title);
    this.menu = Parser.parseItem(data.menu);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.description = new Text(data.description);
  }
}

export default PlaylistSidebarPrimaryInfo;
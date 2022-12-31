import Parser from '../index';
import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class PlaylistSidebarPrimaryInfo extends YTNode {
  static type = 'PlaylistSidebarPrimaryInfo';

  stats: Text[];
  thumbnail_renderer;
  title: Text;
  menu;
  endpoint: NavigationEndpoint;
  description: Text;

  constructor(data: any) {
    super();
    this.stats = data.stats.map((stat: any) => new Text(stat));
    this.thumbnail_renderer = Parser.parse(data.thumbnailRenderer);
    this.title = new Text(data.title);
    this.menu = Parser.parseItem(data.menu);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.description = new Text(data.description);
  }
}

export default PlaylistSidebarPrimaryInfo;
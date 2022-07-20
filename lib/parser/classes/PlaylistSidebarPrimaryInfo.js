import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';

import { YTNode } from '../helpers';

class PlaylistSidebarPrimaryInfo extends YTNode {
  static type = 'PlaylistSidebarPrimaryInfo';
  constructor(data) {
    super();
    this.stats = data.stats.map((stat) => new Text(stat));
    this.thumbnail_renderer = Parser.parse(data.thumbnailRenderer);
    this.title = new Text(data.title);
    this.menu = data.menu && Parser.parse(data.menu);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.description = new Text(data.description);
  }
}
export default PlaylistSidebarPrimaryInfo;

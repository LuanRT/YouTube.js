import Author from './misc/Author';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';

import { YTNode } from '../helpers';

class WatchCardRichHeader extends YTNode {
  static type = 'WatchCardRichHeader';
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.title_endpoint = new NavigationEndpoint(data.titleNavigationEndpoint);
    this.subtitle = new Text(data.subtitle);
    this.author = new Author(data, data.titleBadge ? [ data.titleBadge ] : null, data.avatar);
    this.author.name = this.title;
    this.style = data.style;
  }
}
export default WatchCardRichHeader;

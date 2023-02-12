import Author from './misc/Author.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class WatchCardRichHeader extends YTNode {
  static type = 'WatchCardRichHeader';

  title: Text;
  title_endpoint: NavigationEndpoint;
  subtitle: Text;
  author: Author;
  style: string;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.title_endpoint = new NavigationEndpoint(data.titleNavigationEndpoint);
    this.subtitle = new Text(data.subtitle);
    this.author = new Author(data, data.titleBadge ? [ data.titleBadge ] : null, data.avatar);
    this.author.name = this.title.toString();
    this.style = data.style;
  }
}

export default WatchCardRichHeader;
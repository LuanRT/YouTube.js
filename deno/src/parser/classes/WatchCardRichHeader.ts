import Author from './misc/Author.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

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
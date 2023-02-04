import NavigationEndpoint from './NavigationEndpoint.js';
import Thumbnail from './misc/Thumbnail.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class SearchRefinementCard extends YTNode {
  static type = 'SearchRefinementCard';

  thumbnails: Thumbnail[];
  endpoint: NavigationEndpoint;
  query: string;

  constructor(data: any) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.searchEndpoint);
    this.query = new Text(data.query).toString();
  }
}

export default SearchRefinementCard;
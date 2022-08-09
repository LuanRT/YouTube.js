import NavigationEndpoint from './NavigationEndpoint';
import Thumbnail from './misc/Thumbnail';
import Text from './misc/Text';
import { YTNode } from '../helpers';

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
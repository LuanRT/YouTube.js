'use strict';

import NavigationEndpoint from './NavigationEndpoint';
import Thumbnail from './Thumbnail';
import Text from './Text';

class SearchRefinementCard {
  type = 'SearchRefinementCard';

  constructor(data) {
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.searchEndpoint);
    this.query = new Text(data.query).toString();
  }
}

export default SearchRefinementCard;
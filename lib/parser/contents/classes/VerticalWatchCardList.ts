'use strict';

import Parser from '..';
import Text from './Text';
import NavigationEndpoint from './NavigationEndpoint';

class VerticalWatchCardList {
  type = 'VerticalWatchCardList';

  constructor(data) {
    this.items = Parser.parse(data.items);
    this.contents = this.items; // XXX: alias for consistency
    this.view_all_text = new Text(data.viewAllText);
    this.view_all_endpoint = new NavigationEndpoint(data.viewAllEndpoint);
  }
}

export default VerticalWatchCardList;
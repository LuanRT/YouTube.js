'use strict';

import Parser from '..';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './Text';

class ReelShelf {
  type = 'ReelShelf';

  constructor(data) {
    this.title = new Text(data.title);
    this.items = Parser.parse(data.items);
    this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default ReelShelf;
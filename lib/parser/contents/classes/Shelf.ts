'use strict';

import Text from './Text';
import Parser from '..';
import NavigationEndpoint from './NavigationEndpoint';

class Shelf {
  type = 'Shelf';

  constructor(data) {
    this.title = new Text(data.title);

    if (data.endpoint) {
      this.endpoint = new NavigationEndpoint(data.endpoint);
    }

    this.content = Parser.parse(data.content) || [];

    if (data.icon?.iconType) {
      this.icon_type = data.icon?.iconType;
    }

    if (data.menu) {
      this.menu = Parser.parse(data.menu);
    }
  }
}

export default Shelf;
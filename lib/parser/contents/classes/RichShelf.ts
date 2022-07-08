'use strict';

import Parser from '..';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './Text';

class RichShelf {
  type = 'RichShelf';

  constructor(data) {
    this.title = new Text(data.title);
    this.contents = Parser.parse(data.contents);
    this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
  }
}

export default RichShelf;
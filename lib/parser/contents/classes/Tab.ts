'use strict';

import Parser from '..';
import NavigationEndpoint from './NavigationEndpoint';

class Tab {
  type = 'Tab';

  constructor(data) {
    this.title = data.title || 'N/A';
    this.selected = data.selected || false;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.content = Parser.parse(data.content);
  }
}

export default Tab;
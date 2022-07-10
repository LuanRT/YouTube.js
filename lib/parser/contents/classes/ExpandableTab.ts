'use strict';

import Parser from '..';
import NavigationEndpoint from './NavigationEndpoint';

class ExpandableTab {
  type = 'ExpandableTab';

  constructor(data) {
    this.title = data.title;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.selected = data.selected; // If this.selected then we may have content else we do not
    this.content = data.content ? Parser.parse(data.content) : null;
  }
}

export default ExpandableTab;
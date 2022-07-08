'use strict';

import Parser from '..';
import NavigationEndpoint from './NavigationEndpoint';

class ContinuationItem {
  type = 'ContinuationItem';

  constructor(data) {
    this.trigger = data.trigger;

    data.button &&
      (this.button = Parser.parse(data.button));

    this.endpoint = new NavigationEndpoint(data.continuationEndpoint);
  }
}

export default ContinuationItem;
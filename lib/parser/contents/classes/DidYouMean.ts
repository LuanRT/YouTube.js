'use strict';

import Text from './Text';
import NavigationEndpoint from './NavigationEndpoint';

class DidYouMean {
  type = 'DidYouMean';

  constructor(data) {
    this.corrected_query = new Text(data.correctedQuery);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default DidYouMean;
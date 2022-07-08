'use strict';

import Parser from '..';
import Text from './Text';
import NavigationEndpoint from './NavigationEndpoint';

class MusicShelf {
  type = 'MusicShelf';

  constructor(data) {
    this.title = new Text(data.title).toString();

    this.contents = Parser.parse(data.contents);

    if (data.bottomEndpoint) {
      this.endpoint = new NavigationEndpoint(data.bottomEndpoint);
    }

    if (this.continuation) {
      this.continuation = data.continuations?.[0].nextContinuationData.continuation;
    }

    if (data.bottomText) {
      this.bottom_text = new Text(data.bottomText);
    }
  }
}

export default MusicShelf;
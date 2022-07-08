'use strict';

import Parser from '..';
import Text from './Text';

class ChannelFeaturedContent {
  type = 'ChannelFeaturedContent';

  constructor(data) {
    this.title = new Text(data.title);
    this.items = Parser.parse(data.items);
  }
}

export default ChannelFeaturedContent;
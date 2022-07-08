'use strict';

import Text from './Text';

class TextHeader {
  type = 'TextHeader';

  constructor(data) {
    this.title = new Text(data.title);
    this.style = data.style;
  }
}

export default TextHeader;
'use strict';

import Parser from '..';

class TwoColumnSearchResults {
  type = 'TwoColumnSearchResults';

  constructor(data) {
    this.primary_contents = Parser.parse(data.primaryContents);
    this.secondary_contents = Parser.parse(data.secondaryContents);
  }
}

export default TwoColumnSearchResults;
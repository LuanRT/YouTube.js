'use strict';

import Parser from '..';

class SingleColumnBrowseResults {
  type = 'SingleColumnBrowseResults';

  constructor(data) {
    this.tabs = Parser.parse(data.tabs);
  }
}

export default SingleColumnBrowseResults;
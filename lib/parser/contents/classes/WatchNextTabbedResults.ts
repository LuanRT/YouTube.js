'use strict';

const TwoColumnBrowseResults = require('./TwoColumnBrowseResults');

class WatchNextTabbedResults extends TwoColumnBrowseResults {
  type = 'WatchNextTabbedResults';

  constructor(data) {
    super(data);
  }
}

module.exports = WatchNextTabbedResults;
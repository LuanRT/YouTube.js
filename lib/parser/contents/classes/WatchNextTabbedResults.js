'use strict';

const TwoColumnBrowseResults = require('./TwoColumnBrowseResults');

class WatchNextTabbedResults extends TwoColumnBrowseResults {
  type = 'watchNextTabbedResultsRenderer';
  
  constructor(data) {
    super(data);
  }
}

module.exports = WatchNextTabbedResults;
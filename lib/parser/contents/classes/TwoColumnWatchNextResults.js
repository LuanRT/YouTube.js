'use strict';

const Parser = require('..');

class TwoColumnWatchNextResults {
  type = 'twoColumnWatchNextResults';
  
  constructor(data) {
    this.results = Parser.parse(data.results?.results.contents);
    this.secondary_results = Parser.parse(data.secondaryResults?.secondaryResults.results);
    this.conversation_bar = Parser.parse(data?.conversationBar);
  }
}

module.exports = TwoColumnWatchNextResults;
'use strict';

const Parser = require('..');

class TwoColumnWatchNextResults {
  type = 'twoColumnWatchNextResults';
  
  #data;
  
  constructor(data) {
    this.#data = data;
  }
  
  get results() {
    return Parser.parse(this.#data.results.results.contents);
  }
  
  get secondary_results() {
    return Parser.parse(this.#data.secondaryResults.secondaryResults.results);
  }
  
  get conversation_bar() {
    return Parser.parse(this.#data.conversationBar);
  }
}

module.exports = TwoColumnWatchNextResults;
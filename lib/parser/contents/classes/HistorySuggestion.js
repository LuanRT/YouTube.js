'use strict';

const SearchSuggestion = require('./SearchSuggestion');

class HistorySuggestion extends SearchSuggestion {
  type = 'HistorySuggestion';

  constructor(data) {
    super(data);
  }
}

module.exports = HistorySuggestion;
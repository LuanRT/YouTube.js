'use strict';

class SearchSuggestionItem {
  static parse(data) {
    return {
      query: data[0],
      results: data[1].map((res) => res[0])
    }
  }
}

module.exports = SearchSuggestionItem;
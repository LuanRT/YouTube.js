'use strict';

class SearchSuggestionItem {
  static parse(data, bold_text) {
    return data.map((item) => ({
      text: item.trim(),
      bold_text: bold_text.trim().toLowerCase()
    }));
  }
}

module.exports = SearchSuggestionItem;
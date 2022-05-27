'use strict';

class MusicSearchSuggestionItem {
  static parse(data) {
    return {
      query: this.parseItem(data[0]).runs[0].text.trim(),
      results: data.map((item) => this.parseItem(item).runs.map((run) => run.text).join('').trim())
    }
  }
  
  static parseItem(item) {
    let suggestion;
    
    item.historySuggestionRenderer &&
      (suggestion = item.historySuggestionRenderer.suggestion) ||
      (suggestion = item.searchSuggestionRenderer.suggestion);
    
    return suggestion;
  }
}

module.exports = MusicSearchSuggestionItem;
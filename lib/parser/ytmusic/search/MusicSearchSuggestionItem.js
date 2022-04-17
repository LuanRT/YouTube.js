'use strict';

class MusicSearchSuggestionItem {
  static parse(data) {
    return data.map((item) => this.parseItem(item)); 
  }
  
  static parseItem(item) {
    let suggestion;
    
    item.historySuggestionRenderer &&
      (suggestion = item.historySuggestionRenderer.suggestion) ||
      (suggestion = item.searchSuggestionRenderer.suggestion);

    return {
      text: suggestion.runs.map((run) => run.text).join('').trim(),
      bold_text: suggestion.runs[0].text.trim()
    };
  }
}

module.exports = MusicSearchSuggestionItem;
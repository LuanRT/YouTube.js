import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class SearchSuggestionsSection extends YTNode {
  static type = 'SearchSuggestionsSection';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}

export default SearchSuggestionsSection;
import Parser from '../index';

import { YTNode } from '../helpers';

class SearchSuggestionsSection extends YTNode {
  static type = 'SearchSuggestionsSection';
  constructor(data) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}
export default SearchSuggestionsSection;

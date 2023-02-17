import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class SearchSuggestionsSection extends YTNode {
  static type = 'SearchSuggestionsSection';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}

export default SearchSuggestionsSection;
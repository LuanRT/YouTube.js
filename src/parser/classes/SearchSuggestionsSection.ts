import Parser from '../index';
import { YTNode } from '../helpers';

class SearchSuggestionsSection extends YTNode {
  static type = 'SearchSuggestionsSection';
  
  contents;
  
  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}

export default SearchSuggestionsSection;
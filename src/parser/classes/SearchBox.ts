import Parser from '../index.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class SearchBox extends YTNode {
  static type = 'SearchBox';

  endpoint: NavigationEndpoint;
  search_button;
  clear_button;
  placeholder_text: Text;

  constructor(data: any) {
    super();
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.search_button = Parser.parse(data.searchButton);
    this.clear_button = Parser.parse(data.clearButton);
    this.placeholder_text = new Text(data.placeholderText);
  }
}

export default SearchBox;
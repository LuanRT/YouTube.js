import Parser from '../index.ts';
import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

class SearchBox extends YTNode {
  static type = 'SearchBox';

  endpoint: NavigationEndpoint;
  search_button;
  clear_button;
  placeholder_text: Text;

  constructor(data: any) {
    super();
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.search_button = Parser.parseItem(data.searchButton);
    this.clear_button = Parser.parseItem(data.clearButton);
    this.placeholder_text = new Text(data.placeholderText);
  }
}

export default SearchBox;
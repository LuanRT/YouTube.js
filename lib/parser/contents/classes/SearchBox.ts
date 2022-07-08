'use strict';

import Parser from '..';
import Text from './Text';
import NavigationEndpoint from './NavigationEndpoint';

class SearchBox {
  type = 'SearchBox';

  constructor(data) {
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.search_button = Parser.parse(data.searchButton);
    this.clear_button = Parser.parse(data.clearButton);
    this.placeholder_text = new Text(data.placeholderText);
  }
}

export default SearchBox;
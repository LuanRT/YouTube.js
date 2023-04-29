import { YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import Button from './Button.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';

export default class SearchBox extends YTNode {
  static type = 'SearchBox';

  endpoint: NavigationEndpoint;
  search_button: Button | null;
  clear_button: Button | null;
  placeholder_text: Text;

  constructor(data: RawNode) {
    super();
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.search_button = Parser.parseItem(data.searchButton, Button);
    this.clear_button = Parser.parseItem(data.clearButton, Button);
    this.placeholder_text = new Text(data.placeholderText);
  }
}
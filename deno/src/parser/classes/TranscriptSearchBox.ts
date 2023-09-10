import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Parser from '../index.ts';
import Button from './Button.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { Text } from '../misc.ts';

export default class TranscriptSearchBox extends YTNode {
  static type = 'TranscriptSearchBox';

  formatted_placeholder: Text;
  clear_button: Button | null;
  endpoint: NavigationEndpoint;
  search_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.formatted_placeholder = new Text(data.formattedPlaceholder);
    this.clear_button = Parser.parseItem(data.clearButton, Button);
    this.endpoint = new NavigationEndpoint(data.onTextChangeCommand);
    this.search_button = Parser.parseItem(data.searchButton, Button);
  }
}
import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class VerticalWatchCardList extends YTNode {
  static type = 'VerticalWatchCardList';

  items: ObservedArray<YTNode>;
  view_all_text: Text;
  view_all_endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
    this.view_all_text = new Text(data.viewAllText);
    this.view_all_endpoint = new NavigationEndpoint(data.viewAllEndpoint);
  }

  // XXX: Alias for consistency.
  get contents() {
    return this.items;
  }
}
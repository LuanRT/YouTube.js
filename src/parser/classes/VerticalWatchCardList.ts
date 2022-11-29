import Parser from '../index';
import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

export default class VerticalWatchCardList extends YTNode {
  static type = 'VerticalWatchCardList';

  items;
  contents;
  view_all_text: Text;
  view_all_endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.items = Parser.parseArray(data.items);
    this.contents = this.items; // XXX: alias for consistency
    this.view_all_text = new Text(data.viewAllText);
    this.view_all_endpoint = new NavigationEndpoint(data.viewAllEndpoint);
  }
}
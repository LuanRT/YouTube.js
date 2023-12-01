import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class ExpandableTab extends YTNode {
  static type = 'ExpandableTab';

  title: string;
  endpoint: NavigationEndpoint;
  selected: boolean;
  content: YTNode;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.selected = data.selected;
    this.content = Parser.parseItem(data.content);
  }
}
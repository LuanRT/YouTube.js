import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

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
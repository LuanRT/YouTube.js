import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class ExpandableTab extends YTNode {
  static type = 'ExpandableTab';

  title: string;
  endpoint: NavigationEndpoint;
  selected: boolean;
  content;

  constructor(data: any) {
    super();
    this.title = data.title;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.selected = data.selected; // If this.selected then we may have content else we do not
    this.content = data.content ? Parser.parseItem(data.content) : null;
  }
}

export default ExpandableTab;
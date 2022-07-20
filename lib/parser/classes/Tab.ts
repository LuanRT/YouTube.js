import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class Tab extends YTNode {
  static type = 'Tab';
  title: string;
  selected: boolean;
  endpoint;
  content;
  constructor(data: any) {
    super();
    this.title = data.title || 'N/A';
    this.selected = data.selected || false;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.content = Parser.parse(data.content);
  }
}
export default Tab;

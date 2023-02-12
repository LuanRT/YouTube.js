import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class RichShelf extends YTNode {
  static type = 'RichShelf';

  title: Text;
  contents;
  endpoint: NavigationEndpoint | null;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.contents = Parser.parseArray(data.contents);
    this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
  }
}

export default RichShelf;
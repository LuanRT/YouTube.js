import Parser from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

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
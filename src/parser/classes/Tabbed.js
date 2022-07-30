import Parser from '../index';
import { YTNode } from '../helpers';

class Tabbed extends YTNode {
  static type = 'Tabbed';

  constructor(data) {
    super();
    this.contents = Parser.parse(data);
  }
}

export default Tabbed;
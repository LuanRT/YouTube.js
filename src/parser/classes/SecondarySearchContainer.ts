import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class SecondarySearchContainer extends YTNode {
  static type = 'SecondarySearchContainer';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}

export default SecondarySearchContainer;
import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class SecondarySearchContainer extends YTNode {
  static type = 'SecondarySearchContainer';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}

export default SecondarySearchContainer;
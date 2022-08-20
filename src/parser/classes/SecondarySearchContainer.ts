import Parser from '../index';
import { YTNode } from '../helpers';

class SecondarySearchContainer extends YTNode {
  static type = 'SecondarySearchContainer';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}

export default SecondarySearchContainer;
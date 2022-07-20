import Parser from '../index';

import { YTNode } from '../helpers';

class SecondarySearchContainer extends YTNode {
  static type = 'SecondarySearchContainer';
  constructor(data) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}
export default SecondarySearchContainer;

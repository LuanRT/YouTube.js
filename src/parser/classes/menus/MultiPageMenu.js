import Parser from '../../index';
import { YTNode } from '../../helpers';

class MultiPageMenu extends YTNode {
  static type = 'MultiPageMenu';

  constructor(data) {
    super();
    this.header = Parser.parse(data.header);
    this.sections = Parser.parse(data.sections);
    this.style = data.style;
  }
}

export default MultiPageMenu;
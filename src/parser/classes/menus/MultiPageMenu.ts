import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
class MultiPageMenu extends YTNode {
  static type = 'MultiPageMenu';

  header;
  sections;
  style: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parse(data.header);
    this.sections = Parser.parse(data.sections);
    this.style = data.style;
  }
}

export default MultiPageMenu;
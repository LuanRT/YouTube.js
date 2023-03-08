import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
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
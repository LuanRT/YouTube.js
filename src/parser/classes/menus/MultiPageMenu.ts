import type { ObservedArray } from '../../helpers.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import { Parser } from '../../index.js';

export default class MultiPageMenu extends YTNode {
  static type = 'MultiPageMenu';

  header: YTNode;
  sections: ObservedArray<YTNode>;
  style: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header);
    this.sections = Parser.parseArray(data.sections);
    this.style = data.style;
  }
}
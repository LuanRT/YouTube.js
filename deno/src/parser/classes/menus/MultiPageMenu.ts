import type { ObservedArray } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import { Parser } from '../../index.ts';

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
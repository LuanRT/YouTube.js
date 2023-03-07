import { ObservedArray, YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Parser, YTNodes } from '../index.js';
import Text from './misc/Text.js';

class SearchFilterGroup extends YTNode {
  static type = 'SearchFilterGroup';

  title: Text;
  filters: ObservedArray<YTNodes.SearchFilter> | null;

  constructor(data: RawNode) {
    super();

    this.title = new Text(data.title);
    this.filters = Parser.parseArray(data.filters, YTNodes.SearchFilter);
  }
}

export default SearchFilterGroup;
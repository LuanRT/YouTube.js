import { YTNode, type ObservedArray } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Parser } from '../index.js';
import Text from './misc/Text.js';
import SearchFilter from './SearchFilter.js';

export default class SearchFilterGroup extends YTNode {
  static type = 'SearchFilterGroup';

  title: Text;
  filters: ObservedArray<SearchFilter>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.filters = Parser.parseArray(data.filters, SearchFilter);
  }
}
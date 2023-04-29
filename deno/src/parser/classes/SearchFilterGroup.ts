import { YTNode, type ObservedArray } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';
import Text from './misc/Text.ts';
import SearchFilter from './SearchFilter.ts';

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
import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import SearchFilterGroup from './SearchFilterGroup.js';
import Text from './misc/Text.js';

export default class SearchFilterOptionsDialog extends YTNode {
  static type = 'SearchFilterOptionsDialog';

  title: Text;
  groups: ObservedArray<SearchFilterGroup>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.groups = Parser.parseArray(data.groups, SearchFilterGroup);
  }
}
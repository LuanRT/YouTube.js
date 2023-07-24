import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import SearchFilterGroup from './SearchFilterGroup.ts';
import Text from './misc/Text.ts';

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
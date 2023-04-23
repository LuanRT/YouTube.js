import { type ObservedArray, YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Parser from '../index.js';
import Text from './misc/Text.js';
import SearchFilterGroup from './SearchFilterGroup.js';
import ToggleButton from './ToggleButton.js';

export default class SearchSubMenu extends YTNode {
  static type = 'SearchSubMenu';

  title: Text;
  groups: ObservedArray<SearchFilterGroup>;
  button: ToggleButton | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.groups = Parser.parseArray(data.groups, SearchFilterGroup);
    this.button = Parser.parseItem(data.button, ToggleButton);
  }
}
import { ObservedArray, YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Parser from '../index.ts';
import Text from './misc/Text.ts';
import SearchFilterGroup from './SearchFilterGroup.ts';
import ToggleButton from './ToggleButton.ts';

class SearchSubMenu extends YTNode {
  static type = 'SearchSubMenu';

  title: Text;
  groups: ObservedArray<SearchFilterGroup> | null;
  button: ToggleButton | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.groups = Parser.parseArray(data.groups, SearchFilterGroup);
    this.button = Parser.parseItem(data.button, ToggleButton);
  }
}

export default SearchSubMenu;
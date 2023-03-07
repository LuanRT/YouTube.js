import { ObservedArray, YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Parser, { YTNodes } from '../index.js';
import Text from './misc/Text.js';

class SearchSubMenu extends YTNode {
  static type = 'SearchSubMenu';

  title: Text;
  groups: ObservedArray<YTNodes.SearchFilterGroup> | null;
  button: YTNodes.ToggleButton | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.groups = Parser.parseArray(data.groups, YTNodes.SearchFilterGroup);
    this.button = Parser.parseItem(data.button, YTNodes.ToggleButton);
  }
}

export default SearchSubMenu;
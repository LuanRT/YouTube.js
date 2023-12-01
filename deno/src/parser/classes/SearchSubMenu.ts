import { type ObservedArray, YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';
import Text from './misc/Text.ts';
import SearchFilterGroup from './SearchFilterGroup.ts';
import ToggleButton from './ToggleButton.ts';

export default class SearchSubMenu extends YTNode {
  static type = 'SearchSubMenu';

  title?: Text;
  groups?: ObservedArray<SearchFilterGroup>;
  button?: ToggleButton | null;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'title'))
      this.title = new Text(data.title);

    if (Reflect.has(data, 'groups'))
      this.groups = Parser.parseArray(data.groups, SearchFilterGroup);

    if (Reflect.has(data, 'button'))
      this.button = Parser.parseItem(data.button, ToggleButton);
  }
}
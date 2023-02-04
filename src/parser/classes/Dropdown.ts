import Parser from '../index.js';
import { ObservedArray, YTNode } from '../helpers.js';
import DropdownItem from './DropdownItem.js';

class Dropdown extends YTNode {
  static type = 'Dropdown';

  label: string;
  entries: ObservedArray<DropdownItem>;

  constructor(data: any) {
    super();

    this.label = data.label || '';
    this.entries = Parser.parseArray(data.entries, DropdownItem);
  }
}

export default Dropdown;
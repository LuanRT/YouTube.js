import Parser from '../index.ts';
import { ObservedArray, YTNode } from '../helpers.ts';
import DropdownItem from './DropdownItem.ts';

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
import Parser from '..';
import { ObservedArray, YTNode } from '../helpers';
import DropdownItem from './DropdownItem';

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
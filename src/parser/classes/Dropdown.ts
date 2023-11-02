import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import DropdownItem from './DropdownItem.js';

export default class Dropdown extends YTNode {
  static type = 'Dropdown';

  label: string;
  entries: ObservedArray<DropdownItem>;

  constructor(data: RawNode) {
    super();
    this.label = data.label || '';
    this.entries = Parser.parseArray(data.entries, DropdownItem);
  }
}
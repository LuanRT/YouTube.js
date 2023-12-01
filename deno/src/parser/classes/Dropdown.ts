import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import DropdownItem from './DropdownItem.ts';

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
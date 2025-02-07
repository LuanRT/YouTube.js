import { YTNode, type ObservedArray } from '../helpers.js';
import { type RawNode, Parser } from '../index.js';
import Button from './Button.js';

export default class HorizontalButtonList extends YTNode {
  static type = 'HorizontalButtonList';

  items: ObservedArray<Button> | null;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parse(data.items, true, Button);
  }
}
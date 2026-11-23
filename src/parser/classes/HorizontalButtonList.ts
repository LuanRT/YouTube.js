import { YTNode, type ObservedArray } from '../helpers.js';
import { type RawNode, Parser } from '../index.js';
import Button from './Button.js';

export default class HorizontalButtonList extends YTNode {
  static type = 'HorizontalButtonList';

  items: ObservedArray<Button>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items, Button);
  }
}
import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import OverlayMessage from './OverlayMessage.js';

export default class ScrollPaneItemList extends YTNode {
  static type = 'ScrollPaneItemList';

  items: ObservedArray<OverlayMessage> | null;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parse(data.items, true, OverlayMessage);
  }
}
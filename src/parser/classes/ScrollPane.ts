import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ScrollPaneItemList from './ScrollPaneItemList.js';

export default class ScrollPane extends YTNode {
  static type = 'ScrollPane';

  content: ScrollPaneItemList | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, ScrollPaneItemList);
  }
}
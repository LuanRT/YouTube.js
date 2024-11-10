import { type RawNode, Parser } from '../index.js';
import { YTNode } from '../helpers.js';

export default class SharePanelHeader extends YTNode {
  static type = 'SharePanelHeader';

  public title: YTNode;

  constructor(data: RawNode) {
    super();
    this.title = Parser.parseItem(data.title);
  }
}
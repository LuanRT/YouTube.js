import { type RawNode, Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export default class SharePanelHeader extends YTNode {
  static type = 'SharePanelHeader';

  public title: YTNode;

  constructor(data: RawNode) {
    super();
    this.title = Parser.parseItem(data.title);
  }
}
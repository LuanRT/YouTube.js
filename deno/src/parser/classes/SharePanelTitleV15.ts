import type { RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';
import { Text } from '../misc.ts';

export default class SharePanelTitleV15 extends YTNode {
  static type = 'SharePanelTitleV15';

  public title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}
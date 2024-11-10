import type { RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import { Text } from '../misc.js';

export default class SharePanelTitleV15 extends YTNode {
  static type = 'SharePanelTitleV15';

  public title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}
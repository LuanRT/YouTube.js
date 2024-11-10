import type { RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import { Text } from '../misc.js';

export default class StartAt extends YTNode {
  static type = 'StartAt';

  public start_at_option_label: Text;

  constructor(data: RawNode) {
    super();
    this.start_at_option_label = new Text(data.startAtOptionLabel);
  }
}
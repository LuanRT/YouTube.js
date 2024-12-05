import type { RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';
import { Text } from '../misc.ts';

export default class StartAt extends YTNode {
  static type = 'StartAt';

  public start_at_option_label: Text;

  constructor(data: RawNode) {
    super();
    this.start_at_option_label = new Text(data.startAtOptionLabel);
  }
}
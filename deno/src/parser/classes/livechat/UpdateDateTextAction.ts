import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class UpdateDateTextAction extends YTNode {
  static type = 'UpdateDateTextAction';

  date_text: string;

  constructor(data: RawNode) {
    super();
    this.date_text = new Text(data.dateText).toString();
  }
}
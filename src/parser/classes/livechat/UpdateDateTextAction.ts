import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
class UpdateDateTextAction extends YTNode {
  static type = 'UpdateDateTextAction';

  date_text: string;

  constructor(data: RawNode) {
    super();
    this.date_text = new Text(data.dateText).toString();
  }
}

export default UpdateDateTextAction;
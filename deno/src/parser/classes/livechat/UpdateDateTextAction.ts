import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';

class UpdateDateTextAction extends YTNode {
  static type = 'UpdateDateTextAction';

  date_text: string;

  constructor(data: any) {
    super();
    this.date_text = new Text(data.dateText).toString();
  }
}

export default UpdateDateTextAction;
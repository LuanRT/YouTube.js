import Text from '../misc/Text';
import { YTNode } from '../../helpers';

class UpdateDateTextAction extends YTNode {
  static type = 'UpdateDateTextAction';

  constructor(data) {
    super();
    this.date_text = new Text(data.dateText).toString();
  }
}

export default UpdateDateTextAction;
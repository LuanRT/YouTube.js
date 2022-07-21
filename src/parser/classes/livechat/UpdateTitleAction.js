import Text from '../misc/Text';
import { YTNode } from '../../helpers';

class UpdateTitleAction extends YTNode {
  static type = 'UpdateTitleAction';

  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
}

export default UpdateTitleAction;
import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';

class UpdateTitleAction extends YTNode {
  static type = 'UpdateTitleAction';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}

export default UpdateTitleAction;
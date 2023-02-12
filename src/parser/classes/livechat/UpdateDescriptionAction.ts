import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';

class UpdateDescriptionAction extends YTNode {
  static type = 'UpdateDescriptionAction';

  description: Text;

  constructor(data: any) {
    super();
    this.description = new Text(data.description);
  }
}

export default UpdateDescriptionAction;
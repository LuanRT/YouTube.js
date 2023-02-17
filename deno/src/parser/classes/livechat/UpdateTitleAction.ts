import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';

class UpdateTitleAction extends YTNode {
  static type = 'UpdateTitleAction';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}

export default UpdateTitleAction;
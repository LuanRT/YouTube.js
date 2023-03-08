import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
class UpdateTitleAction extends YTNode {
  static type = 'UpdateTitleAction';

  title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}

export default UpdateTitleAction;
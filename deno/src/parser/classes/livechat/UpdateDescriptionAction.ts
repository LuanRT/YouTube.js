import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class UpdateDescriptionAction extends YTNode {
  static type = 'UpdateDescriptionAction';

  description: Text;

  constructor(data: RawNode) {
    super();
    this.description = new Text(data.description);
  }
}
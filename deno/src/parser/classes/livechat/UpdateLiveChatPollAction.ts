import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
class UpdateLiveChatPollAction extends YTNode {
  static type = 'UpdateLiveChatPollAction';

  poll_to_update;

  constructor(data: RawNode) {
    super();
    this.poll_to_update = Parser.parseItem(data.pollToUpdate);
  }
}

export default UpdateLiveChatPollAction;
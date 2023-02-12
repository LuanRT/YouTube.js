import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';

class UpdateLiveChatPollAction extends YTNode {
  static type = 'UpdateLiveChatPollAction';

  poll_to_update;

  constructor(data: any) {
    super();
    this.poll_to_update = Parser.parseItem(data.pollToUpdate);
  }
}

export default UpdateLiveChatPollAction;
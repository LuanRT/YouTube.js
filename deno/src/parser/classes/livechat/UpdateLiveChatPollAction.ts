import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';

class UpdateLiveChatPollAction extends YTNode {
  static type = 'UpdateLiveChatPollAction';

  poll_to_update;

  constructor(data: any) {
    super();
    this.poll_to_update = Parser.parseItem(data.pollToUpdate);
  }
}

export default UpdateLiveChatPollAction;
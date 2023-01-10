import Parser from '../../index';
import { YTNode } from '../../helpers';

class UpdateLiveChatPollAction extends YTNode {
  static type = 'UpdateLiveChatPollAction';

  poll_to_update;

  constructor(data: any) {
    super();
    this.poll_to_update = Parser.parseItem(data.pollToUpdate);
  }
}

export default UpdateLiveChatPollAction;
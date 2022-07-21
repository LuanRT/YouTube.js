import Parser from '../../index';
import { YTNode } from '../../helpers';

class UpdateLiveChatPollAction extends YTNode {
  static type = 'UpdateLiveChatPollAction';

  constructor(data) {
    super();
    this.poll_to_update = Parser.parse(data.pollToUpdate);
  }
}

export default UpdateLiveChatPollAction;
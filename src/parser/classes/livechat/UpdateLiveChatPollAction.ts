import { Parser } from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class UpdateLiveChatPollAction extends YTNode {
  static type = 'UpdateLiveChatPollAction';

  poll_to_update: YTNode;

  constructor(data: RawNode) {
    super();
    this.poll_to_update = Parser.parseItem(data.pollToUpdate);
  }
}
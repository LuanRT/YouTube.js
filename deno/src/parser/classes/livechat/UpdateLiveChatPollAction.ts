import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class UpdateLiveChatPollAction extends YTNode {
  static type = 'UpdateLiveChatPollAction';

  poll_to_update: YTNode;

  constructor(data: RawNode) {
    super();
    this.poll_to_update = Parser.parseItem(data.pollToUpdate);
  }
}
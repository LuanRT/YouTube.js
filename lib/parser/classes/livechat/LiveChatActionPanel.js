import Parser from '../../index';

import { YTNode } from '../../helpers';

class LiveChatActionPanel extends YTNode {
  static type = 'LiveChatActionPanel';
  constructor(data) {
    super();
    this.id = data.id;
    this.contents = Parser.parse(data.contents);
    this.target_id = data.targetId;
  }
}
export default LiveChatActionPanel;

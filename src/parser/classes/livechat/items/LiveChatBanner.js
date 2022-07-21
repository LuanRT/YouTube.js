import Parser from '../../../index';
import { YTNode } from '../../../helpers';

class LiveChatBanner extends YTNode {
  static type = 'LiveChatBanner';

  constructor(data) {
    super();
    this.header = Parser.parse(data.header, 'livechat/items');
    this.contents = Parser.parse(data.contents, 'livechat/items');
    this.action_id = data.actionId;
    this.viewer_is_creator = data.viewerIsCreator;
    this.target_id = data.targetId;
    this.is_stackable = data.isStackable;
    this.background_type = data.backgroundType;
  }
}

export default LiveChatBanner;
import Parser from '../../../index';
import { YTNode } from '../../../helpers';

class LiveChatBanner extends YTNode {
  static type = 'LiveChatBanner';

  header;
  contents;
  action_id: string;
  viewer_is_creator: boolean;
  target_id: string;
  is_stackable: boolean;
  background_type: string;

  constructor(data: any) {
    super();

    this.header = Parser.parse(data.header);
    this.contents = Parser.parse(data.contents);
    this.action_id = data.actionId;
    this.viewer_is_creator = data.viewerIsCreator;
    this.target_id = data.targetId;
    this.is_stackable = data.isStackable;
    this.background_type = data.backgroundType;
  }
}

export default LiveChatBanner;
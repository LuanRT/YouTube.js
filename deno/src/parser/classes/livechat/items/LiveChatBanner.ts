import { YTNode } from '../../../helpers.ts';
import Parser from '../../../index.ts';
import type LiveChatBannerHeader from './LiveChatBannerHeader.ts';

class LiveChatBanner extends YTNode {
  static type = 'LiveChatBanner';

  header: LiveChatBannerHeader | null;
  contents;
  action_id: string;
  viewer_is_creator: boolean;
  target_id: string;
  is_stackable: boolean;
  background_type: string;

  constructor(data: any) {
    super();
    this.header = Parser.parseItem<LiveChatBannerHeader>(data.header);
    this.contents = Parser.parseItem(data.contents);
    this.action_id = data.actionId;
    this.viewer_is_creator = data.viewerIsCreator;
    this.target_id = data.targetId;
    this.is_stackable = data.isStackable;
    this.background_type = data.backgroundType;
  }
}

export default LiveChatBanner;
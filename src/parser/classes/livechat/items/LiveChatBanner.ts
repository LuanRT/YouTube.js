import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import { Parser } from '../../../index.js';
import LiveChatBannerHeader from './LiveChatBannerHeader.js';

export default class LiveChatBanner extends YTNode {
  static type = 'LiveChatBanner';

  header: LiveChatBannerHeader | null;
  contents: YTNode;
  action_id: string;
  viewer_is_creator: boolean;
  target_id: string;
  is_stackable: boolean;
  background_type: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, LiveChatBannerHeader);
    this.contents = Parser.parseItem(data.contents);
    this.action_id = data.actionId;
    this.viewer_is_creator = data.viewerIsCreator;
    this.target_id = data.targetId;
    this.is_stackable = data.isStackable;
    this.background_type = data.backgroundType;
  }
}
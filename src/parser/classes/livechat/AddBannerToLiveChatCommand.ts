import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
import type LiveChatBanner from './items/LiveChatBanner.js';

class AddBannerToLiveChatCommand extends YTNode {
  static type = 'AddBannerToLiveChatCommand';

  banner: LiveChatBanner | null;

  constructor(data: any) {
    super();
    this.banner = Parser.parseItem<LiveChatBanner>(data.bannerRenderer);
  }
}

export default AddBannerToLiveChatCommand;
import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
import LiveChatBanner from './items/LiveChatBanner.js';
import type { RawNode } from '../../index.js';

class AddBannerToLiveChatCommand extends YTNode {
  static type = 'AddBannerToLiveChatCommand';

  banner: LiveChatBanner | null;

  constructor(data: RawNode) {
    super();
    this.banner = Parser.parseItem(data.bannerRenderer, LiveChatBanner);
  }
}

export default AddBannerToLiveChatCommand;
import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import LiveChatBanner from './items/LiveChatBanner.ts';
import type { RawNode } from '../../index.ts';

class AddBannerToLiveChatCommand extends YTNode {
  static type = 'AddBannerToLiveChatCommand';

  banner: LiveChatBanner | null;

  constructor(data: RawNode) {
    super();
    this.banner = Parser.parseItem(data.bannerRenderer, LiveChatBanner);
  }
}

export default AddBannerToLiveChatCommand;
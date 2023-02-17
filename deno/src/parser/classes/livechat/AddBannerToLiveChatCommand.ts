import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type LiveChatBanner from './items/LiveChatBanner.ts';

class AddBannerToLiveChatCommand extends YTNode {
  static type = 'AddBannerToLiveChatCommand';

  banner: LiveChatBanner | null;

  constructor(data: any) {
    super();
    this.banner = Parser.parseItem<LiveChatBanner>(data.bannerRenderer);
  }
}

export default AddBannerToLiveChatCommand;
import Parser from '../../index';
import { YTNode } from '../../helpers';
import type LiveChatBanner from './items/LiveChatBanner';

class AddBannerToLiveChatCommand extends YTNode {
  static type = 'AddBannerToLiveChatCommand';

  banner: LiveChatBanner | null;

  constructor(data: any) {
    super();
    this.banner = Parser.parseItem<LiveChatBanner>(data.bannerRenderer);
  }
}

export default AddBannerToLiveChatCommand;
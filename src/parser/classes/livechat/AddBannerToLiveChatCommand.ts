import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import { Parser } from '../../index.js';
import LiveChatBanner from './items/LiveChatBanner.js';

export default class AddBannerToLiveChatCommand extends YTNode {
  static type = 'AddBannerToLiveChatCommand';

  banner: LiveChatBanner | null;

  constructor(data: RawNode) {
    super();
    this.banner = Parser.parseItem(data.bannerRenderer, LiveChatBanner);
  }
}
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import { Parser } from '../../index.ts';
import LiveChatBanner from './items/LiveChatBanner.ts';

export default class AddBannerToLiveChatCommand extends YTNode {
  static type = 'AddBannerToLiveChatCommand';

  banner: LiveChatBanner | null;

  constructor(data: RawNode) {
    super();
    this.banner = Parser.parseItem(data.bannerRenderer, LiveChatBanner);
  }
}
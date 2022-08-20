import Parser from '../../index';
import { YTNode } from '../../helpers';

class AddBannerToLiveChatCommand extends YTNode {
  static type = 'AddBannerToLiveChatCommand';

  banner;

  constructor(data: any) {
    super();
    this.banner = Parser.parse(data.bannerRenderer);
  }
}

export default AddBannerToLiveChatCommand;
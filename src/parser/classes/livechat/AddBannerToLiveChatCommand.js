import Parser from '../../index';

import { YTNode } from '../../helpers';

class AddBannerToLiveChatCommand extends YTNode {
  static type = 'AddBannerToLiveChatCommand';
  constructor(data) {
    super();
    return Parser.parse(data.bannerRenderer);
  }
}
export default AddBannerToLiveChatCommand;

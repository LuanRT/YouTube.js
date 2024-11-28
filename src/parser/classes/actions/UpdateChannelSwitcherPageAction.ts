import type { ObservedArray } from '../../helpers.js';
import { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';
import ChannelSwitcherPage from '../ChannelSwitcherPage.js';

export default class UpdateChannelSwitcherPageAction extends YTNode {
  static type = 'UpdateChannelSwitcherPageAction';

  public header?: YTNode;
  public contents?: ObservedArray<YTNode> | null;

  constructor(data: RawNode) {
    super();
    const page = Parser.parseItem(data.page, ChannelSwitcherPage);
    if (page) {
      this.header = page.header;
      this.contents = page.contents;
    }
  }
}

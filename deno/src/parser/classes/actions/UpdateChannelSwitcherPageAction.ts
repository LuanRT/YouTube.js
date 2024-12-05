import type { ObservedArray } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import { Parser, type RawNode } from '../../index.ts';
import ChannelSwitcherPage from '../ChannelSwitcherPage.ts';

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

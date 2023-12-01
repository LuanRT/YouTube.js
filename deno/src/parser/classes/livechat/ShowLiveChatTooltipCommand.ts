import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class ShowLiveChatTooltipCommand extends YTNode {
  static type = 'ShowLiveChatTooltipCommand';

  tooltip: YTNode;

  constructor(data: RawNode) {
    super();
    this.tooltip = Parser.parseItem(data.tooltip);
  }
}
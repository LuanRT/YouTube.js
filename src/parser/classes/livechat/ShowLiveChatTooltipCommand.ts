import { Parser } from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class ShowLiveChatTooltipCommand extends YTNode {
  static type = 'ShowLiveChatTooltipCommand';

  tooltip: YTNode;

  constructor(data: RawNode) {
    super();
    this.tooltip = Parser.parseItem(data.tooltip);
  }
}
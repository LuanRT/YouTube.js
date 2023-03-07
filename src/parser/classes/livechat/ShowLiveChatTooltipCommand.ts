import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
class ShowLiveChatTooltipCommand extends YTNode {
  static type = 'ShowLiveChatTooltipCommand';

  tooltip;

  constructor(data: RawNode) {
    super();
    this.tooltip = Parser.parseItem(data.tooltip);
  }
}

export default ShowLiveChatTooltipCommand;
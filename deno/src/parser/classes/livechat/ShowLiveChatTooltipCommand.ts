import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
class ShowLiveChatTooltipCommand extends YTNode {
  static type = 'ShowLiveChatTooltipCommand';

  tooltip;

  constructor(data: RawNode) {
    super();
    this.tooltip = Parser.parseItem(data.tooltip);
  }
}

export default ShowLiveChatTooltipCommand;
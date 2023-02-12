import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';

class ShowLiveChatTooltipCommand extends YTNode {
  static type = 'ShowLiveChatTooltipCommand';

  tooltip;

  constructor(data: any) {
    super();
    this.tooltip = Parser.parseItem(data.tooltip);
  }
}

export default ShowLiveChatTooltipCommand;
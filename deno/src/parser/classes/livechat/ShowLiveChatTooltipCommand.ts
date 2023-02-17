import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';

class ShowLiveChatTooltipCommand extends YTNode {
  static type = 'ShowLiveChatTooltipCommand';

  tooltip;

  constructor(data: any) {
    super();
    this.tooltip = Parser.parseItem(data.tooltip);
  }
}

export default ShowLiveChatTooltipCommand;
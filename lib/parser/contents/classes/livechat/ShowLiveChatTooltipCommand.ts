'use strict';

import Parser from '../..';

class ShowLiveChatTooltipCommand {
  type = 'ShowLiveChatTooltipCommand';

  constructor(data) {
    this.tooltip = Parser.parse(data.tooltip);
  }
}

export default ShowLiveChatTooltipCommand;
'use strict';

const Parser = require('../..');

class ShowLiveChatTooltipCommand {
  type = 'ShowLiveChatTooltipCommand';

  constructor(data) {
    this.tooltip = Parser.parse(data.tooltip);
  }
}

module.exports = ShowLiveChatTooltipCommand;
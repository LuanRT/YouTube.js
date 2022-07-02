'use strict';

const Text = require('./Text');

class MusicResponsiveListItemFixedColumn {
  type = 'musicResponsiveListItemFlexColumnRenderer';

  constructor(data) {
    this.title = new Text(data.text);
    this.display_priority = data.displayPriority;
  }
}

module.exports = MusicResponsiveListItemFixedColumn;
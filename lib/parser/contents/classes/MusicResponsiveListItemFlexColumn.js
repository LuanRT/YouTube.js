'use strict';

const Text = require('./Text');

class MusicResponsiveListItemFlexColumn {
  type = 'musicResponsiveListItemFlexColumnRenderer';
  
  constructor(data) {
    this.title = new Text(data.text);
    this.display_priority = data.displayPriority;
  }
}

module.exports = MusicResponsiveListItemFlexColumn;
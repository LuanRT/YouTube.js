'use strict';

const Text = require('./Text');

class MusicDescriptionShelf {
  type = 'MusicDescriptionShelf';
  
  constructor(data) {
    this.description = new Text(data.description);
    this.max_collapsed_lines = data.maxCollapsedLines || null;
    this.max_expanded_lines = data.maxExpandedLines || null;
    this.footer = new Text(data.footer);
  }
}

module.exports = MusicDescriptionShelf;
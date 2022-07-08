'use strict';

const Text = require('./Text');

class MusicDescriptionShelf {
  type = 'MusicDescriptionShelf';

  constructor(data) {
    this.description = new Text(data.description);

    if (this.max_collapsed_lines) {
      this.max_collapsed_lines = data.maxCollapsedLines;
    }

    if (this.max_expanded_lines) {
      this.max_expanded_lines = data.maxExpandedLines;
    }

    this.footer = new Text(data.footer);
  }
}

module.exports = MusicDescriptionShelf;
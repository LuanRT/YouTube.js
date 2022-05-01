const ResultsParser = require('.');
const Text = require('./Text');

class VideoSecondaryInfo {
  type = 'VideoSecondaryInfo';

  constructor(item) {
    this.owner = ResultsParser.parseItem(item.owner);
    this.description = new Text(item.description);
    this.metadata = ResultsParser.parseItem(item.metadataRowContainer);
    this.description_collapsed_lines = item.descriptionCollapsedLines;
  }
}

module.exports = VideoSecondaryInfo;
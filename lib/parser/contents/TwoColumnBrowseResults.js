const ResultsParser = require(".");

class TwoColumnBrowseResults {
    type = 'TwoColumnBrowseResults';

    constructor(item) {
        this.tabs = ResultsParser.parse(item.tabs);
    }
}

module.exports = TwoColumnBrowseResults;
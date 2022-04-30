const ResultsParser = require(".");

class MetadataRowContainer {
    type = 'MetadataRowContainer';

    constructor(item) {
        this.rows = ResultsParser.parse(item.rows);
    }
}

module.exports = MetadataRowContainer;
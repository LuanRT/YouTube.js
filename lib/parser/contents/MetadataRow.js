const ResultsParser = require(".");
const Text = require("./Text");

class MetadataRow {
    type = 'MetadataRow';

    constructor(item) {
        this.contents = new Text(item.contents);
        this.title = new Text(item.title);
    }
}

module.exports = MetadataRow;
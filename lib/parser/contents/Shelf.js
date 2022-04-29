const ResultsParser = require(".");
const Text = require("./Text");

class Shelf {
    type = 'Shelf';

    constructor(item) {
        this.title = new Text(item.title).text;
        this.content = ResultsParser.parseItem(item.content);
    }
}

module.exports = Shelf;
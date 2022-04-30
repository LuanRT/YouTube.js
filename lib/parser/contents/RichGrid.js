const ResultsParser = require(".");

class RichGrid {
    type = 'RichGrid';

    constructor(item) {
        // XXX: we don't parse the masthead since it is usually an advertisement
        // XXX: reflowOptions aren't parsed, I think its only used internally for layout
        this.header = ResultsParser.parseItem(item.header);
        this.contents = ResultsParser.parse(item.contents);
    }
}

module.exports = RichGrid;
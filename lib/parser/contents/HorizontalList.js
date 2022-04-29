const ResultsParser = require(".");

class HorizontalList {
    type = 'HorizontalList';

    constructor(item) {
        this.visibleItemCount = item.visibleItemCount;
        this.items = ResultsParser.parse(item.items);
    }
}

module.exports = HorizontalList;
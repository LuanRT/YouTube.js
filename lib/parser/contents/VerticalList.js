const ResultsParser = require(".");

class VerticalList {
    type = 'VerticalList';

    constructor(item) {
        this.collapsedItemCount = item.collapsedItemCount;
        this.items = ResultsParser.parse(item.items);
    }
}

module.exports = VerticalList;
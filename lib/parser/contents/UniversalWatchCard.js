const ResultsParser = require(".");

class UniversalWatchCard {
    type = 'UniversalWatchCard';

    constructor(items) {
        this.header = ResultsParser.parseItem(items.header);
        this.hero = ResultsParser.parseItem(items.callToAction);
        this.sections = ResultsParser.parse(items.sections);
    }
}

module.exports = UniversalWatchCard;
const ResultsParser = require(".");

class BackstagePostThread {
    type = 'BackstagePostThread';

    constructor(item) {
        this.post = ResultsParser.parseItem(item.post);
    }
}

module.exports = BackstagePostThread;
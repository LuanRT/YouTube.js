const ResultsParser = require(".");
const NavigationEndpoint = require("./NavigationEndpoint");

class ContinuationItem {
    type = 'ContinuationItem';

    constructor(item) {
        this.endpoint = new NavigationEndpoint(item.continuationEndpoint);
    }
}

module.exports = ContinuationItem;
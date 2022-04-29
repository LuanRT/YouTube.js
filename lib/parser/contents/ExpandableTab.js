const ResultsParser = require(".");
const NavigationEndpoint = require("./NavigationEndpoint");

class ExpandableTab {
    type = 'ExpandableTab';

    constructor(item) {
        this.title = item.title;
        this.endpoint = new NavigationEndpoint(item.endpoint);
        this.selected = item.selected; // if this.selected then we may have content else we do not
        this.content = item.content ? ResultsParser.parseItem(item.content) : null;
    }
}

module.exports = ExpandableTab;
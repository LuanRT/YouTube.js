const ResultsParser = require(".");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");

class Shelf {
    type = 'Shelf';

    constructor(item) {
        this.title = new Text(item.title).text;
        this.content = ResultsParser.parseItem(item.content);
        this.endpoint = item.endpoint ? new NavigationEndpoint(item.endpoint) : null;
        // XXX: maybe add this as buttonRenderer?
        // this is the playAllButton in the original response
        this.button = item.playAllButton?.buttonRenderer ? {
            text: new Text(item.playAllButton.buttonRenderer.text, '').text,
            endpoint: item.playAllButton.buttonRenderer.navigationEndpoint ? new NavigationEndpoint(item.playAllButton.buttonRenderer.navigationEndpoint) : null,
            icon: item.playAllButton.buttonRenderer.icon?.iconType || 'UNKNOWN'
        } : null;
    }
}

module.exports = Shelf;
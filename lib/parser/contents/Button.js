const ResultsParser = require(".");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");

class Button {
    type = 'Button';

    constructor(item) {
        this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
        this.text = new Text(item.text);
        this.tooltip = item.tooltip;
    }
}

module.exports = Button;
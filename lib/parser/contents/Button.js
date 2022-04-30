const ResultsParser = require(".");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");

class Button {
    type = 'Button';

    constructor(item) {
        this.navigation_endpoint = item.navigationEndpoint && new NavigationEndpoint(item.navigationEndpoint);
        this.service_endpoint = item.serviceEndpoint && new NavigationEndpoint(item.serviceEndpoint);
        this.text = new Text(item.text);
        this.tooltip = item.tooltip;
    }

    get endpoint() {
        if (this.service_endpoint) {
            return this.service_endpoint;
        }
        if (this.navigation_endpoint) {
            return this.navigation_endpoint;
        }
        return null;
    }
}

module.exports = Button;
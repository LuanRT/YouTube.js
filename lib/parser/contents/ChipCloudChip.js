const ResultsParser = require(".");
const NavigationEndpoint = require("./NavigationEndpoint");
const Text = require("./Text");

class ChipCloudChip {
    type = 'ChipCloudChip';

    constructor(item) {
        this.selected = item.selected;
        this.endpoint = item.navigationEndpoint && new NavigationEndpoint(item.navigationEndpoint);
        this.text = new Text(item.text);
    }
}

module.exports = ChipCloudChip;
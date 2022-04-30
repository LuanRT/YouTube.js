const ResultsParser = require(".");
const NavigationEndpoint = require("./NavigationEndpoint");

class TextRun {
    type = 'TextRun';
    text;
    endpoint;
    constructor(node) {
        this.text = node.text;
        this.endpoint = node.navigationEndpoint && new NavigationEndpoint(node.navigationEndpoint);
    }
}

module.exports = TextRun;
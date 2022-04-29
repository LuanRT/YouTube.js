const Text = require("./Text");
const NavigationEndpoint = require("./NavigationEndpoint");

class NavigatableText extends Text {
    type = 'NavigatableText';
    endpoint;
    constructor(node) {
        super(node);
        this.endpoint = 
            node.runs?.[0]?.navigationEndpoint ? 
                new NavigationEndpoint(node.runs[0].navigationEndpoint) : 
            node.navigationEndpoint ? 
                new NavigationEndpoint(node.navigationEndpoint) : null;
    }

    toString() {
        return `[${this.text}](${this.url?.toString()})`;
    }

    toJSON() {
        return this;
    }
}

module.exports = NavigatableText;

export = NavigatableText;
declare class NavigatableText extends Text {
    constructor(node: any);
    endpoint: NavigationEndpoint;
    toJSON(): NavigatableText;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");

export = NavigatableText;
declare class NavigatableText extends Text {
    type: string;
    endpoint: NavigationEndpoint;
    toJSON(): NavigatableText;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");

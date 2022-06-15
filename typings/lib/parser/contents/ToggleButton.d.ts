export = ToggleButton;
declare class ToggleButton {
    constructor(item: any);
    type: string;
    is_toggled: any;
    is_disabled: any;
    default_service_endpoint: NavigationEndpoint;
    toggled_service_endpoint: NavigationEndpoint;
    default_navigation_endpoint: NavigationEndpoint;
    default_tooltip: any;
    toggled_tooltip: any;
    default_text: Text;
    toggled_text: Text;
    get endpoint(): NavigationEndpoint;
    get tooltip(): any;
    get text(): Text;
}
import NavigationEndpoint = require("./NavigationEndpoint");
import Text = require("./Text");

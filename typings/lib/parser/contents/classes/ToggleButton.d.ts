export = ToggleButton;
declare class ToggleButton {
    constructor(data: any);
    type: string;
    text: Text;
    toggled_text: Text;
    tooltip: any;
    toggled_tooltip: any;
    is_toggled: any;
    is_disabled: any;
    icon_type: any;
    like_count: number;
    short_like_count: any;
    endpoint: NavigationEndpoint;
    button_id: any;
    target_id: any;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");

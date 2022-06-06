export = ThumbnailOverlayToggleButton;
declare class ThumbnailOverlayToggleButton {
    constructor(data: any);
    type: string;
    is_toggled: any;
    icon_type: {
        toggled: any;
        untoggled: any;
    };
    tooltip: {
        toggled: any;
        untoggled: any;
    };
    toggled_endpoint: NavigationEndpoint;
    untoggled_endpoint: NavigationEndpoint;
}
import NavigationEndpoint = require("../NavigationEndpoint");

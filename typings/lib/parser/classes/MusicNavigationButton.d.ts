export = MusicNavigationButton;
declare class MusicNavigationButton {
    constructor(data: any);
    type: string;
    button_text: any;
    endpoint: NavigationEndpoint;
}
import NavigationEndpoint = require("./NavigationEndpoint");

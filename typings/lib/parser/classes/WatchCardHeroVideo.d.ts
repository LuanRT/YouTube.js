export = WatchCardHeroVideo;
declare class WatchCardHeroVideo {
    constructor(data: any);
    type: string;
    endpoint: NavigationEndpoint;
    call_to_action_button: any;
    hero_image: any;
    label: any;
}
import NavigationEndpoint = require("./NavigationEndpoint");

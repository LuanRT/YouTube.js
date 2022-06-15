export = EndscreenElement;
declare class EndscreenElement {
    constructor(data: any);
    type: string;
    style: any;
    image: Thumbnail[];
    icon: Thumbnail[];
    metadata: Text;
    call_to_action: Text;
    hovercard_button: any;
    is_subscribe: any;
    title: Text;
    endpoint: NavigationEndpoint;
    thumbnail_overlays: any;
    left: any;
    width: any;
    top: any;
    aspect_ratio: any;
    start_ms: any;
    end_ms: any;
    id: any;
}
import Thumbnail = require("./Thumbnail");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");

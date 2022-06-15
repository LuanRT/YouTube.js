export = WatchCardCompactVideo;
declare class WatchCardCompactVideo {
    constructor(item: any);
    type: string;
    title: Text;
    views: any;
    published_at: any;
    endpoint: NavigationEndpoint;
    duration: Text;
    byline: NavigatableText;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
import NavigatableText = require("./NavigatableText");

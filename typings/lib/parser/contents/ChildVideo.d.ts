export = ChildVideo;
declare class ChildVideo {
    constructor(item: any);
    type: string;
    id: any;
    title: Text;
    length: Text;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");

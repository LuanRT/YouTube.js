export = ChildVideo;
declare class ChildVideo {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    duration: {
        text: any;
        seconds: number;
    };
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");

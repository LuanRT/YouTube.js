export = SubFeedOption;
declare class SubFeedOption {
    constructor(data: any);
    type: string;
    name: Text;
    is_selected: any;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");

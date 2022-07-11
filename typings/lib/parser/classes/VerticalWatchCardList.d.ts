export = VerticalWatchCardList;
declare class VerticalWatchCardList {
    constructor(data: any);
    type: string;
    items: any;
    contents: any;
    view_all_text: Text;
    view_all_endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");

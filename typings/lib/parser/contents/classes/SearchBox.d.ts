export = SearchBox;
declare class SearchBox {
    constructor(data: any);
    type: string;
    endpoint: NavigationEndpoint;
    search_button: any;
    clear_button: any;
    placeholder_text: Text;
}
import NavigationEndpoint = require("./NavigationEndpoint");
import Text = require("./Text");

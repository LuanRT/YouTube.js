export = SearchSuggestion;
declare class SearchSuggestion {
    constructor(data: any);
    type: string;
    suggestion: Text;
    endpoint: NavigationEndpoint;
    icon_type: any;
    service_endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");

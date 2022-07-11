export = ShowingResultsFor;
declare class ShowingResultsFor {
    constructor(data: any);
    type: string;
    corrected_query: Text;
    endpoint: NavigationEndpoint;
    original_query_endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");

export = DidYouMean;
declare class DidYouMean {
    constructor(data: any);
    type: string;
    corrected_query: Text;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");

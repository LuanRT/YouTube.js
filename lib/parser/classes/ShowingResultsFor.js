import Text from "./Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class ShowingResultsFor {
    type = 'ShowingResultsFor';
    constructor(data) {
        this.corrected_query = new Text(data.correctedQuery);
        this.endpoint = new NavigationEndpoint(data.correctedQueryEndpoint);
        this.original_query_endpoint = new NavigationEndpoint(data.originalQueryEndpoint);
    }
}
export default ShowingResultsFor;

import Text from "./Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class DidYouMean {
    type = 'DidYouMean';
    constructor(data) {
        this.corrected_query = new Text(data.correctedQuery);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default DidYouMean;

import Text from "./Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class CompactLink {
    type = 'CompactLink';
    constructor(data) {
        this.title = new Text(data.title).toString();
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.style = data.style;
    }
}
export default CompactLink;

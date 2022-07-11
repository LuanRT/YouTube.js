import Text from "./Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class SubFeedOption {
    type = 'SubFeedOption';
    constructor(data) {
        this.name = new Text(data.name);
        this.is_selected = data.isSelected;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default SubFeedOption;

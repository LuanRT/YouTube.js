import Text from "./Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class ChipCloudChip {
    type = 'ChipCloudChip';
    constructor(data) {
        // TODO: is this isSelected or just selected
        this.is_selected = data.isSelected;
        this.endpoint = data.navigationEndpoint && new NavigationEndpoint(data.navigationEndpoint);
        this.text = new Text(data.text).toString();
    }
}
export default ChipCloudChip;

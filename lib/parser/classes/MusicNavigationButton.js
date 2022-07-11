import Text from "./Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class MusicNavigationButton {
    type = 'MusicNavigationButton';
    constructor(data) {
        this.button_text = new Text(data.buttonText).toString();
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default MusicNavigationButton;

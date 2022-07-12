import Text from "./Text.js";
import NavigationEndpoint from "../NavigationEndpoint.js"; 
class NavigatableText extends Text {
    static type = 'NavigatableText';
    endpoint;
    constructor(node) {
        super(node);
        // TODO: is this needed? Text now supports this itself
        this.endpoint =
            node.runs?.[0]?.navigationEndpoint ?
                new NavigationEndpoint(node.runs[0].navigationEndpoint) :
                node.navigationEndpoint ?
                    new NavigationEndpoint(node.navigationEndpoint) :
                    node.titleNavigationEndpoint ?
                        new NavigationEndpoint(node.titleNavigationEndpoint) : null;
    }
    toJSON() {
        return this;
    }
}
export default NavigatableText;

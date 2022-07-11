import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class Tab {
    type = 'Tab';
    constructor(data) {
        this.title = data.title || 'N/A';
        this.selected = data.selected || false;
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.content = Parser.parse(data.content);
    }
}
export default Tab;

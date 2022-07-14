import NavigationEndpoint from "../NavigationEndpoint.js";

class TextRun {
    constructor(data) {
        this.text = data.text;
        this.endpoint = data.navigationEndpoint ? new NavigationEndpoint(data.navigationEndpoint) : undefined;
    }
}
export default TextRun;

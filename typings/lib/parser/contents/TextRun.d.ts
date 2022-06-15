export = TextRun;
declare class TextRun {
    constructor(node: any);
    type: string;
    text: any;
    endpoint: NavigationEndpoint;
}
import NavigationEndpoint = require("./NavigationEndpoint");

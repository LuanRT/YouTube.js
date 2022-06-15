export = Tab;
declare class Tab {
    constructor(item: any);
    type: string;
    /**
     * @type {string}
     */
    title: string;
    endpoint: NavigationEndpoint;
    selected: any;
    content: any;
}
import NavigationEndpoint = require("./NavigationEndpoint");

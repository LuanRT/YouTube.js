export = TabbedFeed;
declare class TabbedFeed extends Feed {
    get tabs(): any[];
    /**
     *
     * @param {string} title title of the tab to get
     * @returns {Promise<TabbedFeed>}
     */
    getTab(title: string): Promise<TabbedFeed>;
    get title(): any;
    #private;
}
import Feed = require("./Feed");

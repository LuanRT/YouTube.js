import Parser from "../index.js";

class TabbedSearchResults {
    type = 'TabbedSearchResults';
    constructor(data) {
        this.tabs = Parser.parse(data.tabs);
    }
}
export default TabbedSearchResults;

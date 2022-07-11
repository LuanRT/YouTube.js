import Parser from "../index.js";

class TwoColumnBrowseResults {
    type = 'TwoColumnBrowseResults';
    constructor(data) {
        this.tabs = Parser.parse(data.tabs);
        this.secondary_contents = Parser.parse(data.secondaryContents);
    }
}
export default TwoColumnBrowseResults;

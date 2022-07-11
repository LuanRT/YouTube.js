import Parser from "../index.js";

class SingleColumnBrowseResults {
    type = 'SingleColumnBrowseResults';
    constructor(data) {
        this.tabs = Parser.parse(data.tabs);
    }
}
export default SingleColumnBrowseResults;

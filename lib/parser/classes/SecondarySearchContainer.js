import Parser from "../index.js";

class SecondarySearchContainer {
    type = 'SecondarySearchContainer';
    constructor(data) {
        this.contents = Parser.parse(data.contents);
    }
}
export default SecondarySearchContainer;

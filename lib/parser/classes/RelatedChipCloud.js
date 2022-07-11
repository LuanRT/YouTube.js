import Parser from "../index.js";

class RelatedChipCloud {
    type = 'RelatedChipCloud';
    constructor(data) {
        this.content = Parser.parse(data.content);
    }
}
export default RelatedChipCloud;

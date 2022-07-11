import Parser from "../index.js";

class RichItem {
    type = 'RichItem';
    constructor(data) {
        return Parser.parse(data.content);
    }
}
export default RichItem;

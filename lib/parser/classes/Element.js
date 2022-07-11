import Parser from "../index.js";

class Element {
    type = 'Element';
    constructor(data) {
        const type = data.newElement.type.componentType;
        return Parser.parse(type.model);
    }
}
export default Element;

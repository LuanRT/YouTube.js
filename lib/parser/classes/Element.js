import Parser from "../index.js";

import { YTNode } from "..";

class Element extends YTNode {
    static type = 'Element';
    constructor(data) {
        super();
        const type = data.newElement.type.componentType;
        return Parser.parse(type.model);
    }
}
export default Element;

import Parser from "../index";

import { YTNode } from "../helpers";

class Element extends YTNode {
    static type = 'Element';
    constructor(data) {
        super();
        const type = data.newElement.type.componentType;
        return Parser.parse(type.model);
    }
}
export default Element;

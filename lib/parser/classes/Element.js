import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class Element extends YTNode {
    static [ParserTypeSymbol] = 'Element';
    constructor(data) {
        super();
        const type = data.newElement.type.componentType;
        return Parser.parse(type.model);
    }
}
export default Element;

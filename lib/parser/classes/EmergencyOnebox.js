import Text from "./misc/Text.js";
import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class EmergencyOnebox extends YTNode {
    static [ParserTypeSymbol] = 'EmergencyOnebox';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.first_option = Parser.parse(data.firstOption);
        this.menu = Parser.parse(data.menu);
    }
}
export default EmergencyOnebox;

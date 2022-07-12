import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class CardCollection extends YTNode {
    static [ParserTypeSymbol] = 'CardCollection';
    constructor(data) {
        super();
        this.cards = Parser.parse(data.cards);
        this.header = new Text(data.headerText);
        this.allow_teaser_dismiss = data.allowTeaserDismiss;
    }
}
export default CardCollection;

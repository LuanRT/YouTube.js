import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class HorizontalCardList extends YTNode {
    static [ParserTypeSymbol] = 'HorizontalCardList';
    constructor(data) {
        super();
        this.cards = Parser.parse(data.cards);
        this.header = Parser.parse(data.header);
        this.previous_button = Parser.parse(data.previousButton);
        this.next_button = Parser.parse(data.nextButton);
    }
}
export default HorizontalCardList;

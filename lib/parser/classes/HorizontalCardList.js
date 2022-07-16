import Parser from "../index";

import { YTNode } from "../helpers";

class HorizontalCardList extends YTNode {
    static type = 'HorizontalCardList';
    constructor(data) {
        super();
        this.cards = Parser.parse(data.cards);
        this.header = Parser.parse(data.header);
        this.previous_button = Parser.parse(data.previousButton);
        this.next_button = Parser.parse(data.nextButton);
    }
}
export default HorizontalCardList;

import Parser from "../index.js";

class HorizontalCardList {
    type = 'HorizontalCardList';
    constructor(data) {
        this.cards = Parser.parse(data.cards);
        this.header = Parser.parse(data.header);
        this.previous_button = Parser.parse(data.previousButton);
        this.next_button = Parser.parse(data.nextButton);
    }
}
export default HorizontalCardList;

import Parser from "../index.js";

import { YTNode } from "..";

class ChipCloud extends YTNode {
    static type = 'ChipCloud';
    constructor(data) {
        super();
        this.chips = Parser.parse(data.chips);
        this.next_button = Parser.parse(data.nextButton);
        this.previous_button = Parser.parse(data.previousButton);
        this.horizontal_scrollable = data.horizontalScrollable;
    }
}
export default ChipCloud;

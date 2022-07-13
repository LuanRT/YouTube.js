import Parser from "../index.js";

import { YTNode } from "../helpers";
import ChipCloudChip from "./ChipCloudChip.js";

class ChipCloud extends YTNode {
    static type = 'ChipCloud';
    constructor(data) {
        super();
        // TODO: check this assumption that chipcloudchip is always returned
        this.chips = Parser.parse(data.chips, true, ChipCloudChip);
        this.next_button = Parser.parse(data.nextButton);
        this.previous_button = Parser.parse(data.previousButton);
        this.horizontal_scrollable = data.horizontalScrollable;
    }
}
export default ChipCloud;

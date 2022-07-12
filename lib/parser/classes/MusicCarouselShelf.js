import Parser from "../index.js";

import { YTNode } from "..";

class MusicCarouselShelf extends YTNode {
    static type = 'MusicCarouselShelf';
    constructor(data) {
        super();
        this.header = Parser.parse(data.header);
        this.contents = Parser.parse(data.contents);
        if (data.numItemsPerColumn) {
            this.num_items_per_column = data.numItemsPerColumn;
        }
    }
}
export default MusicCarouselShelf;

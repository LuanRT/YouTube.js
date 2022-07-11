import Parser from "../index.js";

class MusicCarouselShelf {
    type = 'MusicCarouselShelf';
    constructor(data) {
        this.header = Parser.parse(data.header);
        this.contents = Parser.parse(data.contents);
        if (data.numItemsPerColumn) {
            this.num_items_per_column = data.numItemsPerColumn;
        }
    }
}
export default MusicCarouselShelf;

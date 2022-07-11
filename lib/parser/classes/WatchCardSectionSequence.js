import Parser from "../index.js";

class WatchCardSectionSequence {
    type = 'WatchCardSectionSequence';
    constructor(data) {
        this.lists = Parser.parse(data.lists);
    }
}
export default WatchCardSectionSequence;

import Parser from "../index.js";

class UniversalWatchCard {
    type = 'UniversalWatchCard';
    constructor(data) {
        this.header = Parser.parse(data.header);
        this.call_to_action = Parser.parse(data.callToAction);
        this.sections = Parser.parse(data.sections);
    }
}
export default UniversalWatchCard;

import Parser from "../index.js";

class Endscreen {
    type = 'Endscreen';
    constructor(data) {
        this.elements = Parser.parse(data.elements);
        this.start_ms = data.startMs;
    }
}
export default Endscreen;

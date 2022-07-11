import Parser from "../index.js";

class MusicHeader {
    type = 'MusicHeader';
    constructor(data) {
        this.header = Parser.parse(data.header);
    }
}
export default MusicHeader;

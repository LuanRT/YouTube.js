import Parser from "../index.js";

class MusicQueue {
    type = 'MusicQueue';
    constructor(data) {
        this.content = Parser.parse(data.content);
    }
}
export default MusicQueue;

import Parser from "../index.js";

class BackstagePostThread {
    type = 'BackstagePostThread';
    constructor(data) {
        this.post = Parser.parse(data.post);
    }
}
export default BackstagePostThread;

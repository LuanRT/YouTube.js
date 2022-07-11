import Parser from "../index.js";

class SingleColumnMusicWatchNextResults {
    type = 'SingleColumnMusicWatchNextResults';
    constructor(data) {
        return Parser.parse(data);
    }
}
export default SingleColumnMusicWatchNextResults;

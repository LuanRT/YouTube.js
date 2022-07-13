import Parser from "../index.js";

import { YTNode } from "../helpers";

class SingleColumnMusicWatchNextResults extends YTNode {
    static type = 'SingleColumnMusicWatchNextResults';
    constructor(data) {
        super();
        return Parser.parse(data);
    }
}
export default SingleColumnMusicWatchNextResults;

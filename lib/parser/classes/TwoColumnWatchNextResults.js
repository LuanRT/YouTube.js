import Parser from "../index.js";

import { YTNode } from "..";

class TwoColumnWatchNextResults extends YTNode {
    static #type = Symbol('TwoColumnWatchNextResults');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.results = Parser.parse(data.results?.results.contents);
        this.secondary_results = Parser.parse(data.secondaryResults?.secondaryResults.results);
        this.conversation_bar = Parser.parse(data?.conversationBar);
    }
}
export default TwoColumnWatchNextResults;

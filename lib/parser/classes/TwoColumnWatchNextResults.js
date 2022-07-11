import Parser from "../index.js";

class TwoColumnWatchNextResults {
    type = 'TwoColumnWatchNextResults';
    constructor(data) {
        this.results = Parser.parse(data.results?.results.contents);
        this.secondary_results = Parser.parse(data.secondaryResults?.secondaryResults.results);
        this.conversation_bar = Parser.parse(data?.conversationBar);
    }
}
export default TwoColumnWatchNextResults;

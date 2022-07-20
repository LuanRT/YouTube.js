import Parser from '../index';

import { YTNode } from '../helpers';

class TwoColumnWatchNextResults extends YTNode {
  static type = 'TwoColumnWatchNextResults';
  constructor(data) {
    super();
    this.results = Parser.parse(data.results?.results.contents, true);
    this.secondary_results = Parser.parse(data.secondaryResults?.secondaryResults.results, true);
    this.conversation_bar = Parser.parse(data?.conversationBar);
  }
}
export default TwoColumnWatchNextResults;

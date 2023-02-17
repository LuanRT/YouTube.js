import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class TwoColumnWatchNextResults extends YTNode {
  static type = 'TwoColumnWatchNextResults';

  results;
  secondary_results;
  conversation_bar;

  constructor(data: any) {
    super();
    this.results = Parser.parseArray(data.results?.results.contents);
    this.secondary_results = Parser.parseArray(data.secondaryResults?.secondaryResults.results);
    this.conversation_bar = Parser.parseItem(data?.conversationBar);
  }
}

export default TwoColumnWatchNextResults;
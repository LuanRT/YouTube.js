import Parser from '../index';
import { YTNode } from '../helpers';

class UniversalWatchCard extends YTNode {
  static type = 'UniversalWatchCard';

  header;
  call_to_action;
  sections;

  constructor(data: any) {
    super();
    // TODO: use parseItem / parseArray for these
    this.header = Parser.parse(data.header);
    this.call_to_action = Parser.parse(data.callToAction);
    this.sections = Parser.parse(data.sections);
  }
}

export default UniversalWatchCard;
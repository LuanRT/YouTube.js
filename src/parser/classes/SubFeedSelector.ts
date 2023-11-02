import { Parser, type RawNode } from '../index.js';
import Text from './misc/Text.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import SubFeedOption from './SubFeedOption.js';

export default class SubFeedSelector extends YTNode {
  static type = 'SubFeedSelector';

  title: Text;
  options: ObservedArray<SubFeedOption>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.options = Parser.parseArray(data.options, SubFeedOption);
  }
}
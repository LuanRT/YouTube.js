import { Parser, type RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';
import SubFeedOption from './SubFeedOption.ts';

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
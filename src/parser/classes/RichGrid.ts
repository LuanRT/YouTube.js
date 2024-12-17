import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';

export default class RichGrid extends YTNode {
  static type = 'RichGrid';

  header: YTNode;
  contents: ObservedArray<YTNode>;
  target_id?: string;

  constructor(data: RawNode) {
    super();
    // (Daniel Wykerd) XXX: we don't parse the masthead since it is usually an advertisement
    // (Daniel Wykerd) XXX: reflowOptions aren't parsed, I think its only used internally for layout
    this.header = Parser.parseItem(data.header);
    this.contents = Parser.parseArray(data.contents);

    if (Reflect.has(data, 'targetId'))
      this.target_id = data.targetId;
  }
}
import { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';

export default class ReplaceLiveChatAction extends YTNode {
  static type = 'ReplaceLiveChatAction';

  to_replace: string;
  replacement: YTNode | null;

  constructor(data: RawNode) {
    super();
    this.to_replace = data.toReplace;
    this.replacement = Parser.parseItem(data.replacement);
  }
}

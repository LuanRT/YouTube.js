import { YTNode } from '../../helpers.ts';
import { Parser, type RawNode } from '../../index.ts';

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

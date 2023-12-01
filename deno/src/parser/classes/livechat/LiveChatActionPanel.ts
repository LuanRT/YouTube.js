import { Parser } from '../../index.ts';
import { type SuperParsedResult, YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class LiveChatActionPanel extends YTNode {
  static type = 'LiveChatActionPanel';

  id: string;
  contents: SuperParsedResult<YTNode>;
  target_id: string;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.contents = Parser.parse(data.contents);
    this.target_id = data.targetId;
  }
}
import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';

export default class RichSection extends YTNode {
  static type = 'RichSection';

  public content: YTNode;
  public full_bleed: boolean;
  public target_id?: string;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content);
    this.full_bleed = !!data.fullBleed;

    if ('targetId' in data) {
      this.target_id = data.targetId;
    }
  }
}
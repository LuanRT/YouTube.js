import { Parser, type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';

export default class RelatedChipCloud extends YTNode {
  static type = 'RelatedChipCloud';

  public content: YTNode;
  public show_prominent_chips: boolean;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content);
    this.show_prominent_chips = Boolean(data.showProminentChips);
  }
}
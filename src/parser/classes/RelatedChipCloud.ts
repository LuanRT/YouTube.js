import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

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
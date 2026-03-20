import { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';

export default class ShowSheetCommand extends YTNode {
  static type = 'ShowSheetCommand';

  public inline_content: YTNode | null;
  public remove_default_padding: boolean;

  constructor(data: RawNode) {
    super();
    this.inline_content = Parser.parseItem(data.panelLoadingStrategy?.inlineContent);
    this.remove_default_padding = !!data.removeDefaultPadding;
  }
}
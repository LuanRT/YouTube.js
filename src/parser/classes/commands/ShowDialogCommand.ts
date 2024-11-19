import { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';

export default class ShowDialogCommand extends YTNode {
  static type = 'ShowDialogCommand';

  public inline_content: YTNode | null;
  public remove_default_padding: boolean;

  constructor(data: RawNode) {
    super();
    this.inline_content = Parser.parseItem(data.panelLoadingStrategy?.inlineContent);
    this.remove_default_padding = !!data.removeDefaultPadding;
  }
}
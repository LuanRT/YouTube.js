import { Parser } from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class ShowLiveChatDialogAction extends YTNode {
  static type = 'ShowLiveChatDialogAction';

  dialog: YTNode;

  constructor(data: RawNode) {
    super();
    this.dialog = Parser.parseItem(data.dialog);
  }
}
import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class ShowLiveChatDialogAction extends YTNode {
  static type = 'ShowLiveChatDialogAction';

  dialog: YTNode;

  constructor(data: RawNode) {
    super();
    this.dialog = Parser.parseItem(data.dialog);
  }
}
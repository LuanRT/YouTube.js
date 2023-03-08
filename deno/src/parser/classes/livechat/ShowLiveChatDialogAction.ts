import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
class ShowLiveChatDialogAction extends YTNode {
  static type = 'ShowLiveChatDialogAction';

  dialog;

  constructor(data: RawNode) {
    super();
    this.dialog = Parser.parseItem(data.dialog);
  }
}

export default ShowLiveChatDialogAction;
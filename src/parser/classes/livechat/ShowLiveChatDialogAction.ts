import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
class ShowLiveChatDialogAction extends YTNode {
  static type = 'ShowLiveChatDialogAction';

  dialog;

  constructor(data: RawNode) {
    super();
    this.dialog = Parser.parseItem(data.dialog);
  }
}

export default ShowLiveChatDialogAction;
import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';

class ShowLiveChatDialogAction extends YTNode {
  static type = 'ShowLiveChatDialogAction';

  dialog;

  constructor(data: any) {
    super();
    this.dialog = Parser.parseItem(data.dialog);
  }
}

export default ShowLiveChatDialogAction;
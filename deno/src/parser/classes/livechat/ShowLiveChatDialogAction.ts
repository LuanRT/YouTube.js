import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';

class ShowLiveChatDialogAction extends YTNode {
  static type = 'ShowLiveChatDialogAction';

  dialog;

  constructor(data: any) {
    super();
    this.dialog = Parser.parseItem(data.dialog);
  }
}

export default ShowLiveChatDialogAction;
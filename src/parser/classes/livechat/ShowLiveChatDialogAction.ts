import Parser from '../..';
import { YTNode } from '../../helpers';

class ShowLiveChatDialogAction extends YTNode {
  static type = 'ShowLiveChatDialogAction';

  dialog;

  constructor(data: any) {
    super();
    this.dialog = Parser.parseItem(data.dialog);
  }
}

export default ShowLiveChatDialogAction;
import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';

class OpenPopupAction extends YTNode {
  static type = 'OpenPopupAction';

  popup;
  popup_type;

  constructor(data: any) {
    super();
    this.popup = Parser.parse(data.popup);
    this.popup_type = data.popupType;
  }
}

export default OpenPopupAction;
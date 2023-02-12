import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';

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
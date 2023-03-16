import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

class OpenPopupAction extends YTNode {
  static type = 'OpenPopupAction';

  popup;
  popup_type;

  constructor(data: RawNode) {
    super();
    this.popup = Parser.parseItem(data.popup);
    this.popup_type = data.popupType;
  }
}

export default OpenPopupAction;
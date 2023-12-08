import { Parser } from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class OpenPopupAction extends YTNode {
  static type = 'OpenPopupAction';

  popup: YTNode;
  popup_type: string;

  constructor(data: RawNode) {
    super();
    this.popup = Parser.parseItem(data.popup);
    this.popup_type = data.popupType;
  }
}
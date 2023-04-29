import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

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
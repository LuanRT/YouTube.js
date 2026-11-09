import { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';
import ConfirmDialog from '../ConfirmDialog.js';

export default class ConfirmDialogEndpoint extends YTNode {
  static type = 'ConfirmDialogEndpoint';

  public content: ConfirmDialog | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, ConfirmDialog);
  }
}
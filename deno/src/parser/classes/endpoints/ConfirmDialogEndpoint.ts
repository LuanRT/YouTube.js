import { YTNode } from '../../helpers.ts';
import { Parser, type RawNode } from '../../index.ts';
import ConfirmDialog from '../ConfirmDialog.ts';

export default class ConfirmDialogEndpoint extends YTNode {
  static type = 'ConfirmDialogEndpoint';

  public content: ConfirmDialog | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, ConfirmDialog);
  }
}
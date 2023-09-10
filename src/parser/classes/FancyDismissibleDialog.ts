import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Text } from '../misc.js';

export default class FancyDismissibleDialog extends YTNode {
  static type = 'FancyDismissibleDialog';

  dialog_message: Text;
  confirm_label: Text;

  constructor(data: RawNode) {
    super();
    this.dialog_message = new Text(data.dialogMessage);
    this.confirm_label = new Text(data.confirmLabel);
  }
}
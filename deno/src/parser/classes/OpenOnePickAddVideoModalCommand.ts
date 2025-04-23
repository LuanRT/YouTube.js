import { type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';

export default class OpenOnePickAddVideoModalCommand extends YTNode {
  static type = 'OpenOnePickAddVideoModalCommand';

  list_id: string;
  modal_title: string;
  select_button_label: string;

  constructor(data: RawNode) {
    super();
    this.list_id = data.listId;
    this.modal_title = data.modalTitle;
    this.select_button_label = data.selectButtonLabel;
  }
}

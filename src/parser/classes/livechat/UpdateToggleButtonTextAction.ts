import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class UpdateToggleButtonTextAction extends YTNode {
  static type = 'UpdateToggleButtonTextAction';

  default_text: string;
  toggled_text: string;
  button_id: string;

  constructor(data: RawNode) {
    super();
    this.default_text = new Text(data.defaultText).toString();
    this.toggled_text = new Text(data.toggledText).toString();
    this.button_id = data.buttonId;
  }
}
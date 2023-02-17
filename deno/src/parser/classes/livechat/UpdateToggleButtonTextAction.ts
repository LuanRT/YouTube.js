import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';

class UpdateToggleButtonTextAction extends YTNode {
  static type = 'UpdateToggleButtonTextAction';

  default_text: string;
  toggled_text: string;
  button_id: string;

  constructor(data: any) {
    super();
    this.default_text = new Text(data.defaultText).toString();
    this.toggled_text = new Text(data.toggledText).toString();
    this.button_id = data.buttonId;
  }
}

export default UpdateToggleButtonTextAction;
import Text from '../misc/Text';

import { YTNode } from '../../helpers';

class UpdateToggleButtonTextAction extends YTNode {
  static type = 'UpdateToggleButtonTextAction';
  constructor(data) {
    super();
    this.default_text = new Text(data.defaultText).toString();
    this.toggled_text = new Text(data.toggledText).toString();
    this.button_id = data.buttonId;
  }
}
export default UpdateToggleButtonTextAction;

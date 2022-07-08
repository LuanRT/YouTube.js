'use strict';

import Text from '../Text';

class UpdateToggleButtonTextAction {
  type = 'UpdateToggleButtonTextAction';

  constructor(data) {
    this.default_text = new Text(data.defaultText).toString();
    this.toggled_text = new Text(data.toggledText).toString();
    this.button_id = data.buttonId;
  }
}

export default UpdateToggleButtonTextAction;
'use strict';

import Text from '../Text';

class UpdateDateTextAction {
  type = 'UpdateDateTextAction';

  constructor(data) {
    this.date_text = new Text(data.dateText).toString();
  }
}

export default UpdateDateTextAction;
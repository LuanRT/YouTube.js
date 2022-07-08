'use strict';

import Text from '../Text';

class UpdateDescriptionAction {
  type = 'UpdateDescriptionAction';

  constructor(data) {
    this.description = new Text(data.description);
  }
}

export default UpdateDescriptionAction;
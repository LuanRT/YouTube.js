'use strict';

import Text from '../Text';

class UpdateTitleAction {
  type = 'UpdateTitleAction';

  constructor(data) {
    this.title = new Text(data.title);
  }
}

export default UpdateTitleAction;
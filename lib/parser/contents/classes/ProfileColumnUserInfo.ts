'use strict';

import Text from './Text';
import Thumbnail from './Thumbnail';

class ProfileColumnUserInfo {
  type = 'ProfileColumnUserInfo';

  constructor(data) {
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
  }
}

export default ProfileColumnUserInfo;
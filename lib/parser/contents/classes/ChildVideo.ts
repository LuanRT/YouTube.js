'use strict';

import NavigationEndpoint from './NavigationEndpoint';
import { timeToSeconds } from '../../../utils/Utils';
import Text from './Text';

class ChildVideo {
  type = 'ChildVideo';

  constructor(data) {
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.duration = {
      text: data.lengthText.simpleText,
      seconds: timeToSeconds(data.lengthText.simpleText)
    };
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default ChildVideo;
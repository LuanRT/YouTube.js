'use strict';

import Text from './Text';
import timeToSeconds from '../../../utils/Utils';

class WatchCardCompactVideo {
  type = 'WatchCardCompactVideo';

  constructor(data) {
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: timeToSeconds(data.lengthText.simpleText)
    };
    this.style = data.style;
  }
}

export default WatchCardCompactVideo;
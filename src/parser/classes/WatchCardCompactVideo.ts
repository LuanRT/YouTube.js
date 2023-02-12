import Text from './misc/Text.js';
import { timeToSeconds } from '../../utils/Utils.js';
import { YTNode } from '../helpers.js';

class WatchCardCompactVideo extends YTNode {
  static type = 'WatchCardCompactVideo';

  title: Text;
  subtitle: Text;

  duration: {
    text: string;
    seconds: number;
  };

  style: string;

  constructor(data: any) {
    super();
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
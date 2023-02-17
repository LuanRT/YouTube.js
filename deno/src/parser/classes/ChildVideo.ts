import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';

import { timeToSeconds } from '../../utils/Utils.ts';
import { YTNode } from '../helpers.ts';

class ChildVideo extends YTNode {
  static type = 'ChildVideo';

  id: string;
  title: Text;

  duration: {
    text: string;
    seconds: number;
  };

  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
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
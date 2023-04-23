import { timeToSeconds } from '../../utils/Utils.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class ChildVideo extends YTNode {
  static type = 'ChildVideo';

  id: string;
  title: Text;

  duration: {
    text: string;
    seconds: number;
  };

  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
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
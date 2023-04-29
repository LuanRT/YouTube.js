import { timeToSeconds } from '../../utils/Utils.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';

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
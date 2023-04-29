import { timeToSeconds } from '../../utils/Utils.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class WatchCardCompactVideo extends YTNode {
  static type = 'WatchCardCompactVideo';

  title: Text;
  subtitle: Text;
  duration: {
    text: string;
    seconds: number;
  };
  style: string;

  constructor(data: RawNode) {
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
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';

import { YTNode } from '../helpers';

class Chapter extends YTNode {
  static type = 'Chapter';

  title: Text;
  time_range_start_millis: number;
  thumbnail: Thumbnail[];

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.time_range_start_millis = data.timeRangeStartMillis;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}

export default Chapter;
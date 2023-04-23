import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class TimedMarkerDecoration extends YTNode {
  static type = 'TimedMarkerDecoration';

  visible_time_range_start_millis: number;
  visible_time_range_end_millis: number;
  decoration_time_millis: number;
  label: Text;
  icon: string;

  constructor(data: RawNode) {
    super();
    this.visible_time_range_start_millis = data.visibleTimeRangeStartMillis;
    this.visible_time_range_end_millis = data.visibleTimeRangeEndMillis;
    this.decoration_time_millis = data.decorationTimeMillis;
    this.label = new Text(data.label);
    this.icon = data.icon;
  }
}
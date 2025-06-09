import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class HeatMarker extends YTNode {
  static type = 'HeatMarker';

  time_range_start_millis: number;
  marker_duration_millis: number;
  heat_marker_intensity_score_normalized: number;

  constructor(data: RawNode) {
    super();
    this.time_range_start_millis = Number.parseInt(data.startMillis, 10);
    this.marker_duration_millis = Number.parseInt(data.durationMillis, 10);
    this.heat_marker_intensity_score_normalized = data.intensityScoreNormalized;
  }
}